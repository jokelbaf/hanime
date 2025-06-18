import { client } from './setup';

describe('getInfo()', () => {
    it('should return user info with expected ID', async () => {
        const info = await client.getInfo();
        expect(info.user.id).toBe(+process.env.TEST_USER_ID!);
    });
});
