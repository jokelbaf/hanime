---
sidebar_position: 1
---

# Logging

Hanime supports logging for debugging purposes out of the box. You can configure logging when creating new client as shown below:

```ts
import { HanimeClient } from 'hanime';

const client = new HanimeClient(undefined, { enabled: true, level: 'debug' });
const loginResult = await client.login('email@example.com', 'password');

console.log('Logged in as', loginResult.user.name);
```

<details open>
    <summary>Output</summary>

    ```bash
    [2024-09-20T14:26:59.242Z] [DEBUG]: POST request to /sessions ({"Content-Type":"application/json","x-claim":"1234","x-signature-version":"app2","x-signature":"...","x-session-token":""}): {"burger":"email@example.com","fries":"password"}
    [2024-09-20T14:26:59.501Z] [DEBUG]: [200] Response of /sessions ({}): {"env":{"vhtv_version":1234, ...}, ...}
    Logged in as JokelBaf
    ```

</details>
