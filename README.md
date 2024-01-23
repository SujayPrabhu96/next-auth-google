## Getting Started

```
yarn && yarn install
```

## Environment variables

```
cp .env.copy .env
```

- Create database and set the database url
- Set Google Client id and secret which is available in Google console
- Set the EMAIL_DOMAIN only for which you want the user should be able to access
- Set the application url to NEXTAUTH_URL
- Generate secret using for NEXTAUTH_SECRET
```
openssl rand -base64 32
```

## Apply migrations

```
npx prisma migrate dev && npx prisma generate
```

## Run server

```
yarn dev
```

## Login and logout

- Login path: `/api/auth/signin`
- Logout path: `/api/auth/signout`