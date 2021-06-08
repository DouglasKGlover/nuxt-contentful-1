<template>
  <div class="image">
    <img
      :srcset="
        cfData.image.smallWebP + ' 500w, ' + cfData.image.mediumWebP + ' 1000w'
      "
      sizes="(max-width: 767px) 500px,
            1000px"
      :alt="cfData.image.description"
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
