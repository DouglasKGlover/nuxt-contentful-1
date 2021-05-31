<template>
  <div>
    <p>Paragraph:</p>
    <pre>{{ paragraph }}</pre>
  </div>
</template>

<script>
// Apollo GQL
import paragraphById from "~/apollo/queries/paragraphById";
export default {
  props: {
    paragraphId: String
  },
  apollo: {
    paragraph: {
      query: paragraphById, // Note the import above, sourced from /apollo/queries
      variables() {
        return {
          preview: Boolean(process.env.CTF_PREVIEW),
          id: this.paragraphId
        };
      }
    }
  }
};
</script>

<style></style>
