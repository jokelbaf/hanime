---
sidebar_position: 4
---

# Hanime Coins

Hanime provides users with a virtual currency called **coins**. You can use coins to purchase premium subscription, to download videos in 1080p quality, and to access other premium features.

This feature is available inside hanime mobile app, where you need to watch an ad to receive coins. The library allows you to call a single method to receive coins without watching ads:

```ts
try {
    const coinsRsp = await client.claimCoins();
    console.log('Claimed', coinsRsp.rewardedAmount, 'coins');
} catch {
    console.log('Coins reward is on cooldown.');
}
```

<details>
    <summary>Output</summary>

    ```bash
    Claimed 156 coins
    ```

</details>

:::note

Hanime API will raise 401 error if you try to claim coins before cooldown is over. Make sure to handle this in your code properly.

:::
