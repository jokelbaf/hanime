---
sidebar_position: 5
---

# Channels

Every Hanime user has their personal channel. Using the library, you can retrieve detailed information about any channel, including videos, comments, and other data.

## Personal Channel

To retrieve detailed information about your personal channel, use the `getMyChannel` method:

```ts
const myChannel = await client.getMyChannel();
console.log(myChannel.userChannel);
```

<details>
    <summary>Output</summary>

    ```ts
    {
        id: 1234,
        userId: 12345,
        themeColor: null,
        title: 'JokelBaf',
        description: 'Hello world!',
        websiteUrl: null,
        location: null,
        socialMedia: null,
        createdAt: '2024-09-18T17:04:37.343Z',
        updatedAt: '2024-09-18T18:42:09.122Z',
        slug: 'user-5340',
        views: 87402,
        introVideos: null,
        bannerUrl: 'https://da.picial.top/uploads/banners/1/2/3/4/abc.jpg'
    }
    ```

</details>

## Other Channels

You can use user slug to retrieve detailed information about any channel. Use the appropriate `getChannel` method:

```ts
const channel = await client.getChannel('user-5340');
console.log(channel.userChannel);
```

<details>
    <summary>Output</summary>

    ```ts
    {
        id: 1234,
        userId: 12345,
        themeColor: null,
        title: 'JokelBaf',
        description: 'Hello world!',
        websiteUrl: null,
        location: null,
        socialMedia: null,
        createdAt: '2024-09-18T17:04:37.343Z',
        updatedAt: '2024-09-18T18:42:09.122Z',
        slug: 'user-5340',
        views: 87402,
        introVideos: null,
        bannerUrl: 'https://da.picial.top/uploads/banners/1/2/3/4/abc.jpg'
    }
    ```

</details>
