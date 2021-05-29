<template>
  <nav>
    <p>{{ currentLocale }}</p>

    <a href="/">Home</a> | <nuxt-link to="/about">About</nuxt-link> |

    <span v-for="locale in availableLocales" :key="locale.code">
      <nuxt-link
        :to="switchLocalePath(locale.code)"
        :class="{ activeLocale: locale.code == currentLocale }"
        :disabled="{ activeLocale: locale.code == currentLocale }"
        >{{ locale.name }}</nuxt-link
      >
      |
    </span>
  </nav>
</template>

<script>
export default {
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
    availableLocales() {
      // return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale); // All locale EXCEPT the active locale
      return this.$i18n.locales; // ALL available locales
    }
  }
};
</script>

<style>
.activeLocale {
  font-weight: bold;
  pointer-events: none;
  opacity: 0.25;
}
</style>
