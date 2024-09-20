---
sidebar_position: 5
---

# Pages

The library provides methods for fetching all mobile app pages.

## Home Page

Home page contains different sections. The package applies some transformations to the raw API data to make it more convenient to use.

```ts
const homePage = await client.getHomePage();
console.log(homePage);
```

<details>
    <summary>Output</summary>

    ```ts
    [
        {
            title: 'Recent Uploads',
            data: [
                ...
            ]
        },
        {
            title: 'New Releases',
            data: [
                ...
            ]
        },
        {
            title: 'Trending',
            data: [
                ...
            ]
        },
        {
            title: 'Random',
            data: [
                ...
            ]
        },
        { title: 'My 56 Recent Likes', data: [ ... ] }
    ]
    ```

</details>
