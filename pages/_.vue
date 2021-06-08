<template>
  <div>
    <h1>{{ pageData.title }}</h1>
    <p v-if="pageData.description">{{ pageData.description }}</p>

    <div v-for="bodyModule in pageData.bodyModulesCollection.items">
      <ctfParagraph
        :cfData="bodyModule"
        v-if="bodyModule.__typename == 'Paragraph'"
      />
      <ctfImage :cfData="bodyModule" v-if="bodyModule.__typename == 'Image'" />
    </div>
  </div>
</template>

<script>
// GraphQL
import { generalPageBySlug } from "~/graphql/generalPageBySlug.gql";
// Page modules
import ctfParagraph from "~/components/bodyModules/paragraph.vue";
import ctfImage from "~/components/bodyModules/image.vue";
export default {
  components: {
    ctfParagraph,
    ctfImage
  },
  data() {
    return {
      hardcoded: 123 // Can have data() alongside asyncData, no problemo
    };
  },
  async asyncData({ $graphql, params, i18n }) {
    const query = generalPageBySlug;

    // Remove trailing slash if it exists, as Contentful slugs lack them (by default)
    // Note that NUXT links require the trailing slash, so we have to handle this discrepency
    let slug = params.pathMatch;
    if (slug.charAt(slug.length - 1) == "/") {
      slug = slug.slice(0, -1);
    }

    const variables = {
      preview: process.env.CTF_PREVIEW,
      slug: slug,
      locale: i18n.localeProperties.iso
    };
    let pageData = await $graphql.default.request(query, variables);

    // Throw a 404 if this template is loaded but
    if (pageData.generalPageCollection.items.length === 0) {
      throw { statusCode: 404, message: "Page not found" };
    }

    pageData = pageData.generalPageCollection.items[0];
    return { pageData };
  }
};
</script>

<style></style>
