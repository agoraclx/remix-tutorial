# Welcome to Remix!

-   [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

-   `build/`
-   `public/build/`

# database

Environment variables declared in this file are automatically made available to Prisma.
See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
See the documentation for all the connection string options: https://pris.ly/d/connection-strings

## setup prisma

```
npm prima init
```

## create schema and push

```
npm prisma db push
```

```
sample:
DATABASE_URL="mysql://root:root@localhost:3306/remix-tut?schema=public"
```
