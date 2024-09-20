<p align="center">
    <img src="https://github.com/user-attachments/assets/c3b8d1bc-a6fb-491f-807b-f71a4a9e3b1a"/>
</p>

---

<div align="center">

<a href="">![NodeJS](https://img.shields.io/badge/node.js-ee89d2?style=for-the-badge&logo=node.js&logoColor=white)</a>
<a href="">![TypeScript](https://img.shields.io/badge/typescript-ee89d2.svg?style=for-the-badge&logo=typescript&logoColor=white)</a>
<a href="">![JavaScript](https://img.shields.io/badge/JavaScript-ee89d2?style=for-the-badge&logo=javascript&logoColor=white)</a>
<a href="">![Eslint](https://img.shields.io/badge/eslint-ee89d2?style=for-the-badge&logo=eslint&logoColor=white)</a>
<a href="">![Prettier](https://img.shields.io/badge/prettier-ee89d2?style=for-the-badge&logo=eslint&logoColor=white)</a>

</div>

<p align="center">
    Fast and efficient hanime.tv API wrapper written in TypeScript. Provides you with a Comprehensive documentation for all your needs.
</p>

---

## Installation

Install the library with tool of your choice!

#### npm
```bash
npm i hanime
```

#### pnpm
```bash
pnpm i hanime
```

#### yarn
```bash
yarn add hanime
```

## Usage

Here is a simple example of how you can use the library:
```ts
import { HanimeClient } from 'hanime';

const client = new HanimeClient();
const loginResult = await client.login('email@example.com', 'password');

console.log('Logged in as', loginResult.user.name);
```
This code will have the following output:
```bash
Logged in as User
```

## Documentation

The library provides you with a comprehensive [documentation](https://hanime.nekolab.app) on all methods and features.

## Contributing

Feel free to contribute, as long as you remember the following simple rules:
- Use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/);
- Follow currently defined file strucutre - there is no need to create new folders under `/src`;
- Document both public and private methods;

### Scripts

The library has some scripts that will help you in case you want to contribute. After you have finished with your code, use them in the following order:
- **Prettify** - prettify your code to make it better.
  ```bash
  npm run prettify
  ```
- **Lint** - lint code to check for style issues.
  ```bash
  npm run lint
  ```
- **Build** - build the library for local testing.
  ```bash
  npm run build
  ```
