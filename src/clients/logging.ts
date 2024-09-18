import { COLOR, LEVEL_COLORS } from '../constants';
import { LoggingConfig } from '../types/logging';

/**
 * A client for logging.
 */
export class LoggingClient {
    /**
     * Logging configuration.
     */
    private config: LoggingConfig;

    /**
     * Mapping of logging levels to their priorities.
     */
    private static LEVEL_PRIORITIES = {
        fatal: 0,
        error: 1,
        warn: 2,
        info: 3,
        debug: 4,
    };

    /**
     * Initializes a new instance of the LoggingClient class.
     * @param config Logging configuration.
     */
    public constructor(config: LoggingConfig) {
        this.config = config;
    }

    /**
     * Log a message at the 'fatal' level.
     * @param args Arguments to log.
     */
    public fatal(...args: any[]): void {
        this.log('fatal', ...args);
    }

    /**
     * Log a message at the 'error' level.
     * @param args Arguments to log.
     */
    public error(...args: any[]): void {
        this.log('error', ...args);
    }

    /**
     * Log a message at the 'warn' level.
     * @param args Arguments to log.
     */
    public warn(...args: any[]): void {
        this.log('warn', ...args);
    }

    /**
     * Log a message at the 'info' level.
     * @param args Arguments to log.
     */
    public info(...args: any[]): void {
        this.log('info', ...args);
    }

    /**
     * Log a message at the 'debug' level.
     * @param args Arguments to log.
     */
    public debug(...args: any[]): void {
        this.log('debug', ...args);
    }

    /**
     * Log a message at the specified level if the current configuration allows it.
     * @param level Log level.
     * @param args Arguments to log.
     */
    private log(level: 'debug' | 'info' | 'warn' | 'error' | 'fatal', ...args: any[]): void {
        if (this.config.enabled && this.shouldLog(level)) {
            console.log(this.getPrefix(level), ...args);
        }
    }

    /**
     * Determine if a message should be logged based on the current log level.
     * @param level Log level.
     * @returns Whether the message should be logged.
     */
    private shouldLog(level: 'debug' | 'info' | 'warn' | 'error' | 'fatal'): boolean {
        return (
            LoggingClient.LEVEL_PRIORITIES[level] <=
            LoggingClient.LEVEL_PRIORITIES[this.config.level]
        );
    }

    /**
     * Get the prefix for a log message.
     * @param level Log level.
     * @returns The log message prefix.
     */
    private getPrefix(level: 'debug' | 'info' | 'warn' | 'error' | 'fatal'): string {
        return (
            `${COLOR.GRAY}[${new Date().toISOString()}] ` +
            `[${LEVEL_COLORS[level]}${level.toUpperCase()}${COLOR.GRAY}]:` +
            `${COLOR.RESET}`
        );
    }
}
