# landing-page

landing page for goodcall.nyc

[structure doc](./structure.md)

## setup

#### clone this repo

```bash
git clone https://github.com/good-call-nyc/landing-page.git
cd landing-page
npm install
```

#### install [s3-website](https://github.com/klaemo/s3-website)

```bash
npm install -g s3-website
```

#### set s3 environment variables

```bash
mv .env.example .env
```

and then add our s3 environment variables to `.env` (ask eugene if u don't have them)

## develop

```bash
npm start
```

visit http://localhost:9966

## deploy

```bash
npm run deploy
```

visit http://goodcall.nyc.s3-website-us-east-1.amazonaws.com/
