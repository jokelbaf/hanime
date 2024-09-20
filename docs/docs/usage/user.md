---
sidebar_position: 2
---

# Hanime User

Hanime uses single model for all users. This model is used for both authenticated and unauthenticated users.

Currently authenticated user is returned on most responses, you can usually get it from `response.user` field.

## Manually Obtaining Current User

If you need to obtain current user manually, you can use `getInfo` method which returns basic information about the current user, app and environment:

```ts
const info = await client.getInfo();

console.log(info.user);
```

<details>
    <summary>Output</summary>

    ```ts
    {
        id: 1234,
        email: 'email@example.com',
        signInCount: 99,
        createdAt: '2024-09-16T21:22:44.094Z',
        updatedAt: '2024-09-19T12:03:40.805Z',
        ip: '127.0.0.1',
        name: 'user',
        slug: 'user-5340',
        identity: '0202a9e07eb1942535w5766f82f16879',
        coins: 100000,
        lastRewardedAdClickedAt: '2024-09-19T12:03:40.804Z',
        altSubscriptionPeriodStart: null,
        altSubscriptionPeriodEnd: null,
        btSubscriptionPlan: null,
        btSubscriptionCreatedAt: null,
        btSubscriptionEndedAt: null,
        btSubscriptionValidUntil: null,
        isBtSubscriptionRecurring: true,
        videoViews: 543,
        videoViewsLength: 12356,
        number: '5340',
        discordUserId: null,
        discordUsername: null,
        discordAvatarUrl: null,
        numComments: 0,
        upvotes: 0,
        downvotes: 0,
        trust: 0,
        avatarUrl: 'https://da.picial.top/uploads/avatars/1/2/3/4/abc.jpg',
        isAdmin: true,
        currentRoles: [],
        altPremiumStatus: 'Not Active',
        btPremiumStatus: 'Active',
        isAbleToAccessPremium: true,
        accessLevel: 0,
        effectiveAvatarUrl: 'https://da.picial.top/uploads/avatars/1/2/3/4/abc.jpg'
    }
    ```

</details>

## Using User from Responses

Most responses contain current user information. You can use it directly from the response:

```ts
const homePage = await client.getHomePage();

console.log(homePage.user);
```

<details>
    <summary>Output</summary>

    ```ts
    {
        id: 1234,
        email: 'email@example.com',
        signInCount: 99,
        createdAt: '2024-09-16T21:22:44.094Z',
        updatedAt: '2024-09-19T12:03:40.805Z',
        ip: '127.0.0.1',
        name: 'user',
        slug: 'user-5340',
        identity: '0202a9e07eb1942535w5766f82f16879',
        coins: 100000,
        lastRewardedAdClickedAt: '2024-09-19T12:03:40.804Z',
        altSubscriptionPeriodStart: null,
        altSubscriptionPeriodEnd: null,
        btSubscriptionPlan: null,
        btSubscriptionCreatedAt: null,
        btSubscriptionEndedAt: null,
        btSubscriptionValidUntil: null,
        isBtSubscriptionRecurring: true,
        videoViews: 543,
        videoViewsLength: 12356,
        number: '5340',
        discordUserId: null,
        discordUsername: null,
        discordAvatarUrl: null,
        numComments: 0,
        upvotes: 0,
        downvotes: 0,
        trust: 0,
        avatarUrl: 'https://da.picial.top/uploads/avatars/1/2/3/4/abc.jpg',
        isAdmin: true,
        currentRoles: [],
        altPremiumStatus: 'Not Active',
        btPremiumStatus: 'Active',
        isAbleToAccessPremium: true,
        accessLevel: 0,
        effectiveAvatarUrl: 'https://da.picial.top/uploads/avatars/1/2/3/4/abc.jpg'
    }
    ```

</details>
