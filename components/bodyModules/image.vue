<template>
  <div class="image">
    <p>
      <em
        ><strong>{{ cfData.fields.image.fields.title }}</strong></em
      >
    </p>
    <img
      :src="cfData.fields.image.fields.file.url + '?w=200'"
      :alt="cfData.fields.image.fields.description"
    />
  </div>
</template>

<script>
export default {
  props: {
    cfData: Object
  }
};
</script>

<style></style>
