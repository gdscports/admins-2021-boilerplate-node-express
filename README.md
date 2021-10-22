# 🌩 Express Boilerplate
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

A boilerplate for projects using Node.js, Express and TypeScript.

## ✨ Features

- [Express](https://expressjs.com/), for serving API data and client files
- [Google TypeScript Style](https://github.com/google/gts), for consistent, readable code
- [Husky](https://www.npmjs.com/package/husky), for pre-commit linting and build checks
- [Issue Templates](./.github/ISSUE_TEMPLATE/feature-request.md), to get you up and running in Open Source quickly
- [Nodemon](https://www.npmjs.com/package/nodemon), for reloading the server upon any code change during development
- [TypeScript](https://www.typescriptlang.org/), for type-safe server files

## 📄 Scripts

Run any of the following scripts using `yarn`:

```
yarn <script>
```

| Script        | Description                                                                   |
|---------------|-------------------------------------------------------------------------------|
| build         | Build the application, ready to be ran with `start`                           |
| build:clean   | Remove previous build files                                                   |
| build:compile | Compile all TypeScript files to JavaScript                                    |
| dev           | Enter "watch" mode, reloading the application if changes are made to the code |
| lint          | Check all files, reporting them to the console                                |
| lint:clean    | Remove linter output files                                                    |
| lint:fix      | Automatically fix all linting issues in files                                 |
| start         | Start the application in production mode, requires `build`                    |
| watch:js      | Watch the build files, reloading if there are any changes                     |
| watch:tsc     | Watch the TypeScript code, recompiling if there are any changes               |

### 🙋‍♂️ Don't have Yarn?

Install it using npm.

```
npm install --global yarn
```

## ⚙️ Environment Variables

**Do not push sensitive keys to GitHub**. You should follow [Next.js' Guide](https://nextjs.org/docs/basic-features/environment-variables) for environment variables.

This includes:

- **.env.local**: Use a `.env.local` file for any sensitive keys. These should not be pushed to GitHub.
- **.env**: Use a `.env` file for any application configuration that can be safely committed to GitHub, such as a `PORT` value.

### 🔨 Environment variables used in this application

Use this table to store and describe the environment variables used in your application so that others can maintain your application.

| Key             | Description                                    | Required |
|-----------------|------------------------------------------------|----------|
| PORT            | The port that the application runs on.         | No       |

