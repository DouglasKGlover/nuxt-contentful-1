<template>
  <div>
    <h1>{{ entry.fields.title }}</h1>

    <h2>Contentful SDK</h2>

    <p v-if="entry.fields.description">{{ entry.fields.description }}</p>

    <div v-for="mod in entry.fields.bodyModules">
      <ctfParagraph
        :cfData="mod"
        v-if="mod.sys.contentType.sys.id == 'paragraph'"
      />
      <ctfImage :cfData="mod" v-if="mod.sys.contentType.sys.id == 'image'" />
    </div>

    <hr />

    <h2>GraphQL</h2>

    <pre>{{ generalPageCollection }}</pre>

    <apolloParagraph :paragraphId="'5Y5EKVdos6VtSKRj4o8SUf'" />
  </div>
</template>

<script>
// Page modules
import ctfParagraph from "~/components/bodyModules/paragraph.vue";
import ctfImage from "~/components/bodyModules/image.vue";
import apolloParagraph from "~/components/bodyModules/apolloParagraph.vue";
// Contentful API
import { createClient } from "~/plugins/contentful.js";
const client = createClient();
// Apollo GQL
import gql from "graphql-tag";
import generalPageBySlug from "~/apollo/queries/generalPageBySlug";
export default {
  components: {
    ctfParagraph,
    ctfImage,
    apolloParagraph
  },
  data() {
    return {
      hardcoded: 123 // Can have data() alongside asyncData, no problemo
    };
  },
  asyncData({ params, i18n }) {
    return Promise.all([
      client.getEntries({
        content_type: "generalPage",
        "fields.slug[match]": params.pathMatch,
        locale: i18n.localeProperties.iso // Specifying the locale; call the appropriate locale w/ i18n?
      })
    ])
      .then(([entry]) => {
        return {
          entry: entry.items[0],
          params: params
        };
      })
      .catch(console.error);
  },
  apollo: {
    generalPageCollection: {
      query: generalPageBySlug,
      prefetch: ({ route }) => ({
        pathMatch: route.params.pathMatch
      }),
      variables() {
        return {
          preview: Boolean(process.env.CTF_PREVIEW),
          slug: this.$route.params.pathMatch
        };
      }
    }
  },
  computed: {
    language() {
      return this.$i18n.localeProperties.iso;
    }
  }
};
</script>

<style></style>
