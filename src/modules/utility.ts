/**
 * Convert string to camel case
 * @param str String to convert
 * @returns Converted string
 */
function toCamelCase(str: string): string {
    return str.replace(/^_/, '').replace(/_([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Convert object keys to camel case
 * @param obj Object to convert
 * @returns Converted object
 */
export function convertToCamelCase(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(convertToCamelCase);
    } else if (obj !== null && obj.constructor === Object) {
        return Object.keys(obj).reduce((result, key) => {
            return { ...result, [toCamelCase(key)]: convertToCamelCase(obj[key]) };
        }, {});
    }
    return obj;
}

/**
 * Convert string to snake case
 * @param str String to convert
 * @returns Converted string
 */
function toSnakeCase(str: string): string {
    return str.replace(/([A-Z])/g, (g) => `_${g.toLowerCase()}`);
}

/**
 * Convert object keys to snake case
 * @param obj Object to convert
 * @returns Converted object
 */
export function convertToSnakeCase(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(convertToSnakeCase);
    } else if (obj && obj.constructor === Object) {
        return Object.keys(obj).reduce((result, key) => {
            return { ...result, [toSnakeCase(key)]: convertToSnakeCase(obj[key]) };
        }, {} as any);
    }
    return obj;
}

/**
 * Omit properties from an object
 * @param obj Object to omit properties from
 * @param keys Properties to omit
 * @returns Object with omitted properties
 */
export function omit<T extends Record<string, any>, K extends keyof T>(
    obj: T,
    keys: K[],
): Omit<T, K> {
    if (Array.isArray(obj)) {
        return obj.map((item) => omit(item, keys)) as any;
    }
    if (typeof obj === 'object' && obj !== null) {
        const result = { ...obj };

        (Object.keys(result) as (keyof T)[]).forEach((key) => {
            if (keys.includes(key as K)) {
                delete result[key];
            } else if (typeof result[key] === 'object' && result[key] !== null) {
                result[key] = omit(result[key], keys) as T[keyof T];
            }
        });
        return result;
    }
    return obj;
}
