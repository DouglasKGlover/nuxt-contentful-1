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
- Apollo `npm install @nuxt/apollo graphql-tag`

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

#### Apollo

- Added Apollo client and set up a basic GQL query on the home page
- On index.vue I demonstrate how to pass a variable to an Apollo query; see Nuxt Config file for "preview" env var example

#### Nuxt i18n

- Docs: https://i18n.nuxtjs.org/setup
- I've set up the main nav to have a language toggle (see nav.vue for options)
- Have also set up the "generalPage"s to be locale-based, i18n was easy to install and configure!

#### Netlify

- Created Production and Preview builds on Netlify
- Set up the Netlify app on Contentful for manual Prod and Preview builds

### TODO

- i18n
- Need to build out "page builder" functionality and mirror the Contentful content onto the site proper
