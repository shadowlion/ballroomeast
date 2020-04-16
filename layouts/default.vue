<template lang="pug">
  #app
    header
      base-navigation
    main
      nuxt
    base-footer
</template>

<script>
import BaseNavigation from "@/components/Common/BaseNavigation";
import BaseFooter from "@/components/Common/BaseFooter";

export default {
  components: {
    BaseNavigation,
    BaseFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
