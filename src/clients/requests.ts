import { convertToCamelCase, convertToSnakeCase } from '../modules/utility';
import { RequestContext } from '../types/client';
import { LoggingClient } from './logging';
import { APIError } from '../errors';

/**
 * Requests client
 */
export class RequestsClient {
    /**
     * Headers compiler function to use on each request
     */
    headersCompiler: (context: RequestContext) => { [key: string]: string };

    /**
     * Logging client
     */
    private loggingClient: LoggingClient;

    /**
     * Create a new instance of the RequestsClient
     * @param baseUrl Base URL for the requests
     * @param headersCompiler Headers compiler function to use on each request
     * @param loggingClient Logging client
     * @returns RequestsClient instance
     */
    public constructor(
        headersCompiler: (context: RequestContext) => { [key: string]: any },
        loggingClient: LoggingClient,
    ) {
        this.loggingClient = loggingClient;
        this.headersCompiler = headersCompiler;
    }

    /**
     * Make a request to the API
     * @param path Path to request
     * @param body Body to send
     * @param method Method to use
     * @returns Response from the API
     */
    public async request(
        baseUrl: string,
        path: string,
        body?: any | null,
        method: 'POST' | 'GET' = 'GET',
    ): Promise<any> {
        const headers = {
            'Content-Type': 'application/json',
            ...this.headersCompiler({ baseUrl, path }),
        };

        this.loggingClient.debug(
            `${method} request to ${baseUrl}${path} (${JSON.stringify(headers)}): ${JSON.stringify(body)}`,
        );

        const rsp = await fetch(`${baseUrl}${path}`, {
            method,
            body: body && JSON.stringify(convertToSnakeCase(body)),
            headers: headers,
        });
        const json = await rsp.json();

        this.loggingClient.debug(
            `[${rsp.status}] Response of ${path} (${JSON.stringify(rsp.headers)}): ${JSON.stringify(json)}`,
        );

        if (!rsp.ok) {
            throw new APIError(json.errors?.[0] || null, rsp.status);
        }
        return convertToCamelCase(json);
    }
}
