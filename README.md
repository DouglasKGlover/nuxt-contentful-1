# nuxt-contentful-1

This is a base example website with a fairly robust CMS-driven feature set using the Nuxt (Vue) framework as a Static Site Generator (SSG).

## Environments

### [Production:](https://nuxt-contentful-1.netlify.app/) [![Netlify Status](https://api.netlify.com/api/v1/badges/4318bc16-5642-4ba3-87b2-43dcf4e7edb3/deploy-status)](https://app.netlify.com/sites/nuxt-contentful-1/deploys)

### [Preview:](https://nuxt-contentful-1-preview.netlify.app/) [![Netlify Status](https://api.netlify.com/api/v1/badges/2bc06553-6ac1-4e32-a980-715c76d556f2/deploy-status)](https://app.netlify.com/sites/nuxt-contentful-1-preview/deploys)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on Nuxt, check out [Nuxt.js docs](https://nuxtjs.org).

## Feature Progress

### Dependencies / NPM Modules

- Nuxt
- Contentful `npm install --save contentful`
- Nuxt i18n `npm install nuxt-i18n`
- Nuxt Graphql Request `npm install nuxt-graphql-request`
- Nuxt Sitemap `npm install @nuxtjs/sitemap`

#### Nuxt

- Env vars are similar to other frameworks (e.g. Gridsome), but you have to explicitly make them available for use in components and plugins (etc.) in nuxt.config.js
- I have a general page routing structure set up in nuxt.config.js
- Added a 404 page, set up Netlify to use it (see Nuxt config)

#### Contentful

- Created an organization and space
- Added a general use page w/ Title and Slug (and 3 examples)
- Created plugins/contentful.js w/ base setup

#### Nuxt i18n

- [Docs](https://i18n.nuxtjs.org/setup)
- I've set up the main nav to have a language toggle (see nav.vue for options)
- Have also set up the "generalPage"s to be locale-based, i18n was easy to install and configure!
- See nuxt config for route generation; getting all generalPages and creating a route, and i18n detects this and does the different locales for us!

#### Nuxt GraphQL Request

- [Docs](https://www.npmjs.com/package/nuxt-graphql-request)
- Simple GQL implementation that actually seems to work quite nicely w/ Contentful
- Verified that image transforms work, passing variables/params is easy

#### Nuxt Sitemap

- [Docs](https://sitemap.nuxtjs.org/)
- Added a basic sitemap configuration

#### Netlify

- Created Production and Preview builds on Netlify
- Set up the Netlify app on Contentful for manual Prod and Preview builds

### TODO

- Create pagination sample
- Add a blog-style section
