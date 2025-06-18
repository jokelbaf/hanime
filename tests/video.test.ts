import { client } from './setup';

describe('Hentai video features', () => {
    let video: Awaited<ReturnType<typeof client.getHentaiVideo>>;

    beforeAll(async () => {
        video = await client.getHentaiVideo(+process.env.TEST_HENTAI_VIDEO_ID!);
    });

    it('getHentaiVideo() returns video with expected ID and slug', () => {
        expect(video.hentaiVideo.id).toBe(+process.env.TEST_HENTAI_VIDEO_ID!);
        expect(video.hentaiVideo.slug).toBe(process.env.TEST_HENTAI_VIDEO_SLUG);
    });

    it('getHentaiDownloads() returns transcode with expected file size', async () => {
        const downloads = await client.getHentaiDownloads(video.hentaiVideo.slug);
        expect(downloads.transcodes[1].filesizeMbs).toBe(
            +process.env.TEST_HENTAI_VIDEO_TRANSCODE_FILESIZE_MBS!,
        );
    });
});
