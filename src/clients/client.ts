import { getAppSignature, getRewardTokenSignature } from '../modules/crypto';
import { RequestContext } from '../types/client';
import { RequestsClient } from './requests';
import { DEVICE_INFO } from '../constants';
import { LoggingClient } from './logging';
import { omit } from '../modules/utility';
import {
    DefaultResponse,
    HomePage,
    PartialHentai,
    CoinsResponse,
    HentaiVideo,
    Downloads,
    LoggingConfig,
    MyChannelResponse,
    ChannelResponse,
    Comments,
    CommentUser,
    PremiumResponse,
} from '../types';

/**
 * Hanime client. Based on mobile and web API.
 */
export class HanimeClient {
    /**
     * Requests client
     */
    private reqClient: RequestsClient;

    /**
     * Logging client
     */
    private loggingClient: LoggingClient;

    /**
     * User session token
     */
    public sessionToken: string | null = null;

    /**
     * Information about the app and currently logged in user
     */
    private info: DefaultResponse | null = null;

    /**
     * Base URL for the requests
     */
    private readonly BASE_URLS = {
        appV8: 'https://www.universal-cdn.com/api/v8',
        app: 'https://www.universal-cdn.com/rapi/v4',
        web: 'https://hanime.tv/',
        search: '',
    };

    /**
     * Create a new instance of the AppClient
     * @param sessionToken User session token
     * @returns AppClient instance
     */
    public constructor(
        sessionToken?: string,
        loggingConfig: LoggingConfig = { enabled: false, level: 'info' },
    ) {
        this.sessionToken = sessionToken || null;
        this.loggingClient = new LoggingClient(loggingConfig);
        this.reqClient = new RequestsClient(({ baseUrl }: RequestContext) => {
            const t = Math.floor(new Date().getTime() / 1000);

            return baseUrl === this.BASE_URLS.web
                ? {
                      'x-time': t.toString(),
                      'x-signature-version': 'web2',
                      'x-session-token': this.sessionToken || '',
                  }
                : {
                      'x-claim': t.toString(),
                      'x-signature-version': 'app2',
                      'x-signature': getAppSignature(t),
                      'x-session-token': this.sessionToken || '',
                  };
        }, this.loggingClient);
    }

    /**
     * Login to the APP
     * @param login User login
     * @param password User password
     * @returns Login response.
     */
    public async login(login: string, password: string): Promise<DefaultResponse> {
        const rsp: DefaultResponse = await this.reqClient.request(
            this.BASE_URLS.app,
            '/sessions',
            {
                burger: login,
                fries: password, // Just put fries in da bag bro
            },
            'POST',
        );
        this.sessionToken = rsp.sessionToken;
        this.info = rsp;
        return rsp;
    }

    /**
     * Get base info about current user
     * @returns User info
     */
    public async getInfo(): Promise<DefaultResponse> {
        return this.info || (await this.reqClient.request(this.BASE_URLS.app, '/user_base_data'));
    }

    /**
     * Get the home page
     * @returns Home page response
     */
    public async getHomePage(): Promise<HomePage> {
        const rsp = await this.reqClient.request(this.BASE_URLS.app, '/home');

        rsp.sections = rsp.sections.map((section: any) => {
            section.data = section.data.map((hentaiId: number) => {
                return rsp.hentaiVideos.find((hentai: PartialHentai) => hentai.id === hentaiId);
            });
            return section;
        });
        return omit(rsp, ['hentaiVideos']) as any;
    }

    /**
     * Claim coins. Raises 401 if cooldown is not over.
     * @returns Coins response
     */
    public async claimCoins(): Promise<CoinsResponse> {
        if (!this.info) {
            this.info = await this.getInfo();
        }

        const t = Math.floor(new Date().getTime() / 1000);
        const signature = getRewardTokenSignature(
            t,
            this.info.user.id,
            this.info.env.mobileApps.buildNumber,
        );

        return await this.reqClient.request(
            this.BASE_URLS.app,
            '/coins',
            {
                rewardToken: `${signature}|${t}`,
                deviceInfo: DEVICE_INFO,
                version: this.info.env.mobileApps.buildNumber,
            },
            'POST',
        );
    }

    /**
     * Get hentai downloads
     * @param slug Slug of the hentai
     * @returns Downloads response
     */
    public async getHentaiDownloads(slug: string): Promise<Downloads> {
        return await this.reqClient.request(this.BASE_URLS.app, `/downloads/${slug}`);
    }

    /**
     * Get hentai video
     * @param id ID of the hentai
     * @returns Hentai video
     */
    public async getHentaiVideo(id: number): Promise<HentaiVideo> {
        return await this.reqClient.request(this.BASE_URLS.app, `/hentai-videos/${id}`);
    }

    /**
     * Get current account channel
     * @returns Channel response
     */
    public async getMyChannel(): Promise<MyChannelResponse> {
        return await this.reqClient.request(this.BASE_URLS.web, '/rapi/v7/my_channel');
    }

    /**
     * Get other user channel
     * @param slug Slug of the user
     * @returns Channel response
     */
    public async getChannel(slug: string): Promise<ChannelResponse> {
        return await this.reqClient.request(this.BASE_URLS.web, `/rapi/v7/channels/${slug}`);
    }

    /**
     * Get hentai comments
     * @param hentaiId ID of the hentai
     * @param offset Offset
     * @param count Comments count
     * @param order Order
     * @returns Comments
     */
    public async getComments(
        hentaiId: number,
        offset: number = 0,
        count: number = 20,
        sortBy: 'createdAt' | 'upvotes' = 'upvotes',
    ): Promise<Comments> {
        const params = new URLSearchParams({
            hv_id: hentaiId.toString(),
            offset: offset.toString(),
            count: count.toString(),
            order: sortBy === 'createdAt' ? 'created_at,desc' : 'upvotes,desc',
        });
        return await this.reqClient.request(this.BASE_URLS.appV8, '/hthreads?' + params.toString());
    }

    /**
     * Get comments users
     * @param userIds User IDs
     * @returns Comment users
     */
    public async getCommentsUsers(userIds: number[]): Promise<CommentUser[]> {
        const params = new URLSearchParams({ source: 'comments' });
        userIds.forEach((id) => params.append('user_ids[]', id.toString()));
        return await this.reqClient.request(this.BASE_URLS.app, '/users?' + params.toString());
    }

    /**
     * Claim Premium
     * @returns Premium response
     */
    public async claimPremium(): Promise<PremiumResponse> {
        if (!this.info) {
            this.info = await this.getInfo();
        }
        
        return await this.reqClient.request(
            this.BASE_URLS.app,
            '/alt_subscriptions',
            {
                deviceInfo: DEVICE_INFO,
                version: this.info.env.mobileApps.buildNumber,
            },
            'POST',
        );
    }
}
