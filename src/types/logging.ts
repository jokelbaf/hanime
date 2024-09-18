/**
 * Logging configuration.
 */
export interface LoggingConfig {
    /**
     * Whether logging is enabled.
     */
    enabled: boolean;
    /**
     * Logging level.
     */
    level: 'debug' | 'info' | 'warn' | 'error' | 'fatal';
}
