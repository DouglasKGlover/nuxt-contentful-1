<template>
  <div>
    <h1>{{ entry.fields.title }}</h1>
    <p v-if="entry.fields.description">{{ entry.fields.description }}</p>

    <div v-for="mod in entry.fields.bodyModules">
      <Paragraph
        :cfData="mod"
        v-if="mod.sys.contentType.sys.id == 'paragraph'"
      />
    </div>

    <hr />

    <pre>{{ entry }}</pre>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import Paragraph from "~/components/bodyModules/paragraph.vue";
const client = createClient();
export default {
  components: {
    Paragraph
  },
  data() {
    return {
      hardcoded: 123 // Can have data() alongside asyncData, no problemo
    };
  },
  asyncData({ params }) {
    return Promise.all([
      client.getEntries({
        content_type: "generalPage",
        "fields.slug[match]": params.slug,
        locale: "en-US" // Specifying the locale; call the appropriate locale w/ i18n?
      })
    ])
      .then(([entry]) => {
        return {
          entry: entry.items[0],
          params: params
        };
      })
      .catch(console.error);
  }
};
</script>

<style></style>
