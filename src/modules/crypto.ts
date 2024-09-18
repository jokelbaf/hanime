import crypto from 'crypto';

/**
 * Get request signature
 * @param t Timestamp
 * @returns Request signature
 */
export function getAppSignature(t: number): string {
    const str = `2${t}8${t}`;

    const messageDigest = crypto.createHash('sha256');
    const str2 = '994482' + str + '113';

    const digest = messageDigest.update(str2).digest();
    return digest.toString('hex');
}

/**
 * Get signature for reward token request
 * @param t Timestamp
 * @param userId User ID
 * @param v App version (build number)
 * @returns Signature
 */
export function getRewardTokenSignature(t: number, userId: number, v: number): string {
    const str = `coins${v}|${userId}|${t}|coins${v}`;

    const messageDigest = crypto.createHash('sha256');
    const digest = messageDigest.update(str).digest();

    return digest.toString('hex');
}
