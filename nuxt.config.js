// Need Contentful plugin for building out pages
const { createClient } = require("./plugins/contentful");
const client = createClient();

export default {
  // Register environment variables here for use in components and plugins
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_HOST: process.env.CTF_HOST,
    CTF_PREVIEW: process.env.CTF_HOST == "preview.contentful.com" // true/false based on whether we're on a preview site
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-app-1",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  plugins: ["~/plugins/contentful"],

  generate: {
    // Netlify should not interfere w/ our custom 404 now w/ fallback:true
    fallback: true,

    // Generate routes for ALL generalPages (or blogs, etc.)
    // Happily, the i18n plugin picks this up for us and handles all locale routing!
    // TODO: Currently usingthe Contentful API; prefer GQL if possible to lessen load of the call
    routes() {
      return client
        .getEntries({ content_type: "generalPage" })
        .then(generalPages => {
          return [...generalPages.items.map(page => `/${page.fields.slug}`)];
        });
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  // Note re: Sitemap - always have it at the *END* of the modules array
  modules: ["nuxt-i18n", "@nuxtjs/sitemap"],

  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        contentfulCode: "en-US",
        name: "EN"
      },
      {
        code: "fr",
        iso: "fr-CA",
        contentfulCode: "fr-CA",
        name: "FR"
      }
    ],
    defaultLocale: "en"
  },

  sitemap: {
    // hostname is mandatory
    hostname: "https://localhost/3000",
    gzip: true
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-graphql-request"],

  graphql: {
    clients: {
      default: {
        endpoint:
          "https://graphql.contentful.com/content/v1/spaces/" +
          process.env.CTF_SPACE_ID +
          "?access_token=" +
          process.env.CTF_CDA_ACCESS_TOKEN
      }
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
