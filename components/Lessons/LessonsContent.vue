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

<script type="ts">
import Vue from "vue";
import d from "./lessons-data.json";

export default Vue.extend({
  data() {
    return {
      lessonTimes: "8:00pm - 8:45pm",
      lessons: d.lessons
    };
  }
});
</script>
