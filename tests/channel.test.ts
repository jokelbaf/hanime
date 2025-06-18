import { client } from './setup';

describe('getChannel()', () => {
    it('should return user channel with expected ID and slug', async () => {
        const channel = await client.getChannel(process.env.TEST_USER_CHANNEL_SLUG!);
        expect(channel.userChannel.slug).toBe(process.env.TEST_USER_CHANNEL_SLUG!);
        expect(channel.userChannel.id).toBe(+process.env.TEST_USER_CHANNEL_ID!);
    });
});

describe('getMyChannel()', () => {
    it('should return user channel with expected user ID', async () => {
        const channel = await client.getMyChannel();
        expect(channel.userChannel.userId).toBe(+process.env.TEST_USER_ID!);
    });
});
