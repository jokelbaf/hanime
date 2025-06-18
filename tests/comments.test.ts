import { client } from './setup';

describe('getComments()', () => {
    it('should return at least one comment with expected hentai video ID', async () => {
        const comments = await client.getComments(+process.env.TEST_HENTAI_VIDEO_ID!);
        expect(comments.data.length).toBeGreaterThan(0);
        expect(comments.data[0].hentaiVideoId).toBe(+process.env.TEST_HENTAI_VIDEO_ID!);
    });
});
