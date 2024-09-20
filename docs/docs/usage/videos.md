---
sidebar_position: 3
---

# Hentai Videos

You can use hentai video id to retrieve detailed information about any hentai video. Use the appropriate `getHentaiVideo` method:

```ts
const video = await client.getHentaiVideo(1234);

console.log('Hentai name -', video.hentaiVideo.name);
```

<details>
    <summary>Output</summary>

    ```bash
    Hentai name - JK Ikinari Doukyo? Micchaku!?
    ```

</details>

## Downloading Videos

:::warning

You need to have an active premium subscription to download videos in 1080p quality. Otherwise, 1080p link will be empty.

:::

Hanime.tv provides a convenient way to download any hentai video in mp4 format. Use `getHentaiDownloads` method to retrieve necessary download links:

```ts
const video = await client.getHentaiVideo(1234);

const downloads = await client.getHentaiDownloads(video.hentaiVideo.slug);

console.log(`Downloading ${video.hentaiVideo.name} in 720p quality...`);

// Transcode with index 1 is 720p quality, available for all users
const file = await fetch(downloads.transcodes[1].url!);
const buffer = await file.arrayBuffer();

fs.writeFileSync('video.mp4', Buffer.from(buffer));

console.log('Video downloaded successfully!');
```

<details>
    <summary>Output</summary>

    ```bash
    Downloading JK Ikinari Doukyo? Micchaku!? in 720p quality...
    Video downloaded successfully!
    ```

</details>
