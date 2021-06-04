<template>
  <div class="container">
    <h1>Home</h1>

    <h2>GraphQL Links</h2>
    <p v-for="page in generalPagesList.generalPageCollection.items">
      <nuxt-link :to="localePath('/' + page.slug)">{{ page.title }}</nuxt-link>
    </p>
  </div>
</template>

<script>
// GraphQL
import { gql } from "nuxt-graphql-request";
export default {
  async asyncData({ $graphql }) {
    const query = gql`
      query generalPageCollectionQuery {
        generalPageCollection {
          items {
            sys {
              id
            }
            title
            slug
          }
        }
      }
    `;

    const generalPagesList = await $graphql.default.request(query);
    return { generalPagesList };
  }
};
</script>

<style></style>
