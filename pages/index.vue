<template>
  <div class="container">
    <h1>Home Page</h1>

    <h2>GraphQL Links</h2>
    <p v-for="page in generalPagesList.generalPageCollection.items">
      <nuxt-link :to="localePath('/' + page.slug + '/')">{{
        page.title
      }}</nuxt-link>
    </p>
  </div>
</template>

<script>
// GraphQL
import { generalPageCollectionQuery } from "~/graphql/generalPageCollectionQuery.gql";
export default {
  async asyncData({ $graphql, i18n }) {
    const query = generalPageCollectionQuery;

    const variables = {
      preview: process.env.CTF_PREVIEW,
      locale: i18n.localeProperties.iso
    };
    const generalPagesList = await $graphql.default.request(query, variables);
    return { generalPagesList };
  }
};
</script>

<style></style>
