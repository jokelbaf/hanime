---
sidebar_position: 7
---

# Premium Subscription

You can use the library to claim a premium subscription for your account. This will allow you to download videos in 1080p quality and access other premium features.

```ts
const { user } = await client.claimPremium();
console.log('Claimed premium subscription for', user.name);
```

<details>
    <summary>Output</summary>

    ```bash
    Claimed premium subscription for JokelBaf
    ```

</details>

:::note

Hanime API will raise 401 error if you try to claim premium with already active subscription, or without having enough coins. Make sure to handle this in your code properly.

:::
