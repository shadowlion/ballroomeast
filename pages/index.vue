<template lang="pug">
  section#home
    home-jumbotron
    home-content
</template>

<script>
import HomeJumbotron from "@/components/Home/HomeJumbotron";
import HomeContent from "@/components/Home/HomeContent";

export default {
  components: {
    HomeJumbotron,
    HomeContent
  }
};
</script>
