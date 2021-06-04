<template>
  <div>
    <h1>{{ entry.fields.title }}</h1>
    <p v-if="entry.fields.description">{{ entry.fields.description }}</p>

    <div v-for="mod in entry.fields.bodyModules">
      <ctfParagraph
        :cfData="mod"
        v-if="mod.sys.contentType.sys.id == 'paragraph'"
      />
      <ctfImage :cfData="mod" v-if="mod.sys.contentType.sys.id == 'image'" />
    </div>

    <hr />

    <pre>{{ generalPageCollection }}</pre>
  </div>
</template>

<script>
// Page modules
import ctfParagraph from "~/components/bodyModules/paragraph.vue";
import ctfImage from "~/components/bodyModules/image.vue";
// Contentful API
import { createClient } from "~/plugins/contentful.js";
const client = createClient();
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
  computed: {
    language() {
      return this.$i18n.localeProperties.iso;
    }
  }
};
</script>

<style></style>
