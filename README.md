# nuxt-contentful-1

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

#### Nuxt

- Env vars are similar to other frameworks (e.g. Gridsome), but you have to explicitly make them available for use in components and plugins (etc.) in nuxt.config.js
- I have a general page routing structure set up in nuxt.config.js
- Added a 404 page, set up Netlify to use it (see Nuxt config)

#### Contentful

- Created an organization and space
- Added a general use page w/ Title and Slug (and 3 examples)
- Created plugins/contentful.js w/ base setup
- Restricted the use of "/" in slugs for generalPage
- Sorted entries referenced on home page by createdAt, descending (latest entry first)

#### Nuxt i18n

- Docs: https://i18n.nuxtjs.org/setup

#### Netlify

- Created Production and Preview builds on Netlify
- Set up the Netlify app on Contentful for manual Prod and Preview builds

### TODO

- i18n
- Need to build out "page builder" functionality and mirror the Contentful content onto the site proper
