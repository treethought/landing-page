# landing-page

landing page for goodcall.nyc

[structure doc](./STRUCTURE.md)

## setup

```bash
git clone https://github.com/good-call-nyc/landing-page.git
cd landing-page
npm install
```

run `cp .env.example .env` and then add our s3 environment variables to `.env`

When first creating the s3 bucket, add the following CORS configuration to support deploying the site on the robinhood domain for adwords:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <CORSRule>
        <AllowedOrigin>https://labs.robinhood.org</AllowedOrigin>
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

```bash
npm run stage
```

visit http://good-call-nyc-staging.surge.sh/

## deploy

```bash
npm run deploy
```

[log in to aws](https://console.aws.amazon.com/console/home?region=us-east-1), navigate to our [cloudfront distribution](https://console.aws.amazon.com/cloudfront/home?region=us-east-1#distribution-settings:E3K69I05FW71HX), and create an invalidaton with the any of the following object paths (depending on what you changed):

```
/index.html
/assets/*
/bundle.js
```

if any new routes were added to `./app/index.js`, after the invalidation is complete, use [botmap.io](http://botmap.io/) to generate a new `sitemap.xml` file for https://goodcall.nyc. Download that file into the root directory of this repository.

finally, deploy again, and create another invalidation with the following object path:

```
/sitemap.xml
```
