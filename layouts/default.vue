<template lang="pug">
  #app
    header
      nav-bar
    main
      nuxt
    main-footer
</template>

<script>
import NavBar from "@/components/Common/NavBar";
import MainFooter from "@/components/Common/MainFooter";

export default {
  components: {
    NavBar,
    MainFooter
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
