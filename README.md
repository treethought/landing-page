# landing-page

landing page for goodcall.nyc

[structure doc](./STRUCTURE.md)

## setup

#### clone this repo

```bash
git clone https://github.com/good-call-nyc/landing-page.git
cd landing-page
npm install
```

#### set s3 environment variables

```bash
mv .env.example .env
```

and then add our s3 environment variables to `.env` (ask eugene if u don't have them).

When first creating the s3 bucket, add the following CORS configuration to
support deploying the site on the robinhood domain for adwords:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <CORSRule>
        <AllowedOrigin>https://labs.robinhood.org/</AllowedOrigin>
        <AllowedMethod>GET</AllowedMethod>
        <MaxAgeSeconds>3000</MaxAgeSeconds>
        <AllowedHeader>Authorization</AllowedHeader>
    </CORSRule>
</CORSConfiguration>
```

## develop

```bash
npm start
```

visit http://localhost:9966

## stage

merge changes into `staging`, checkout `staging`, and then run:

```bash
npm run stage
```

if prompted for login details for surge, use the ones in our accounts doc

visit http://good-call-nyc-staging.surge.sh/

## deploy

```bash
npm run deploy
```

visit http://goodcall.nyc.s3-website-us-east-1.amazonaws.com/ to see the changes immediately on the S3 bucket

once cloudfront is done syncing with the S3 bucket, changes should be visible at https://goodcall.nyc. this can take several hours.
