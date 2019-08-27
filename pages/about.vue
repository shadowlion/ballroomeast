<template lang="pug">
  section#about
    about-jumbotron
    about-content
</template>

<script>
import AboutJumbotron from "@/components/About/AboutJumbotron";
import AboutContent from "@/components/About/AboutContent";

export default {
  components: {
    AboutJumbotron,
    AboutContent
  }
};
</script>
