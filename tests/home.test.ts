import { client } from './setup';

describe('getHomePage()', () => {
    it('should return home page with a user that has expected ID', async () => {
        const homePage = await client.getHomePage();
        expect(homePage.user.id).toBe(+process.env.TEST_USER_ID!);
    });
});
