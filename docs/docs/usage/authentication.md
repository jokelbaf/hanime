---
sidebar_position: 1
---

# Authentication

There are currently two ways to authenticate with Hanime - **email/password** and **sessionToken**. Either way session token used to authenticate requests, email/password authentication is used to obtain it.

It is generally recommended to use email/password for authentication since `sessionToken` may expire and require re-authentication.

The library uses app API for authentication under the hood, since web auth is protected by Google reCAPTCHA.

:::note

Later in the documentation we assume you have imported and created HanimeClient, and authenticated with any convenient method.

:::

## Email/Password Authentication

Use `login` method of the client to authenticate with email and password:

```ts
import { HanimeClient } from 'hanime';

const client = new HanimeClient();
const loginResult = await client.login('email@example.com', 'password');

console.log('Logged in as', loginResult.user.name);
```

<details>
    <summary>Output</summary>

    ```bash
    Logged in as JokelBaf
    ```

</details>

## Session Token Authentication

If you have a session token, you can directly pass it to hanime client without needing to login:

```ts
import { HanimeClient } from 'hanime';

const client = new HanimeClient('...');
const info = await client.getInfo();

console.log('Logged in as', info.user.name);
```

<details>
    <summary>Output</summary>

    ```bash
    Logged in as JokelBaf
    ```

</details>

## Session Token Durability

Session tokens are generally valid for a long time, but they may expire. You can get expiration time of the token from client info:

```ts
import { HanimeClient } from 'hanime';

const client = new HanimeClient('...');
const info = await client.getInfo();

const expirationDate = new Date(info.sessionTokenExpireTimeUnix * 1000);

console.log('The session token expiration time:', expirationDate.toISOString());
```

<details>
    <summary>Output</summary>

    ```bash
    The session token expiration time: 2024-01-01T00:00:00.000Z
    ```

</details>

When the token expires, you will need to re-authenticate with email/password to obtain a new one.
