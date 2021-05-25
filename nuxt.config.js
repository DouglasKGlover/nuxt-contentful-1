// Need Contentful plugin for building out pages
const { createClient } = require("./plugins/contentful");
const client = createClient();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Register environment variables here for use in components and plugins
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },

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
    routes() {
      return Promise.all([
        // Create a page for each "generalPage" Content Type
        client
          .getEntries({
            content_type: "generalPage"
          })
          .then(generalPages => {
            return [...generalPages.items.map(page => `/${page.fields.slug}`)];
          })
      ]);
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
