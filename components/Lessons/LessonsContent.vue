<template>
  <div class="bg-light">
    <div class="container py-5">
      <div class="row">
        <div
          v-for="(lesson, index) in lessons"
          :key="index"
          class="col-md-6 col-lg-4"
        >
          <lesson-card :lesson="lesson" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface Lesson {
  imgUrl: string;
  title: string;
  description: string;
  rate: string;
  hasLink: boolean;
  link: {
    title: string;
    url: string;
  };
}

export default Vue.extend({
  props: {
    lessons: {
      type: Array as () => Lesson[],
      required: true,
    },
  },
});
</script>
