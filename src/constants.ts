/**
 * Console colors.
 */
export enum COLOR {
    RESET = '\x1b[0m',
    RED = '\x1b[31m',
    GREEN = '\x1b[32m',
    YELLOW = '\x1b[33m',
    BLUE = '\x1b[34m',
    MAGENTA = '\x1b[35m',
    CYAN = '\x1b[36m',
    WHITE = '\x1b[37m',
    GRAY = '\x1b[90m',
}

/**
 * Logging level colors.
 */
export const LEVEL_COLORS = {
    debug: COLOR.GRAY,
    info: COLOR.GREEN,
    warn: COLOR.YELLOW,
    error: COLOR.RED,
    fatal: COLOR.RED,
};

/**
 * Device info for the app.
 */
export const DEVICE_INFO =
    '[3.7.1][SM-S908E 9] Mozilla/5.0 (Linux; Android 9; SM-S908E Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/128.0.6613.146 Safari/537.36';
