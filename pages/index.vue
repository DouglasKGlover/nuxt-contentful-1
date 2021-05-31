<template>
  <div class="container">
    <h1>Home</h1>

    <h2>Links using Apollo/GQL</h2>
    <p v-for="(e, i) in generalPageCollection.items">
      <nuxt-link :to="localePath('/' + e.slug)">{{ e.title }}</nuxt-link>
    </p>

    <h2>Links using Contentful Client SDK</h2>
    <p v-for="(e, i) in pages.items">
      <nuxt-link :to="localePath('/' + e.fields.slug)">{{
        e.fields.title
      }}</nuxt-link>
    </p>
  </div>
</template>

<script>
// Contentful API
import { createClient } from "~/plugins/contentful.js";
const client = createClient();
// Apollo GQL
import allGeneralPages from "~/apollo/queries/allGeneralPages";
export default {
  asyncData() {
    return Promise.all([
      client.getEntry("JhqeFZnD92hnHudfGnbnf"),
      client.getEntries({
        content_type: "generalPage",
        order: "-sys.createdAt"
      })
    ])
      .then(([entry, pages]) => {
        return {
          entry: entry,
          pages: pages
        };
      })
      .catch(console.error);
  },
  apollo: {
    generalPageCollection: {
      query: allGeneralPages, // Note the import above, sourced from /apollo/queries
      variables() {
        return {
          preview: Boolean(process.env.CTF_PREVIEW)
        };
      }
    }
  }
};
</script>

<style></style>
