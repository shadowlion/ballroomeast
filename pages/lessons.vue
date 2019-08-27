<template lang="pug">
  section#lessons
    lessons-jumbotron
    lessons-content
</template>

<script>
import LessonsJumbotron from "@/components/Lessons/LessonsJumbotron";
import LessonsContent from "@/components/Lessons/LessonsContent";

export default {
  components: {
    LessonsJumbotron,
    LessonsContent
  }
};
</script>
