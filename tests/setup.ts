import { HanimeClient } from '@nekolab/hanime';

/**
 * Client to be used in all tests.
 */
export const client = new HanimeClient();

beforeAll(async () => {
    await client.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
});
