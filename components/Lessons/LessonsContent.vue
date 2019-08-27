<template lang="pug">
  .py-5.bg-light
    .container
      .row
        .col-sm-12.col-md-6.col-lg-4(
          v-for="(lesson, index) in lessons"
          :key="index"
        )
          b-card(
            :title="lesson.title"
            :img-src="lesson.imgUrl"
            img-top
            tag="article"
            class="mb-2"
          )
            b-card-text.text-justify {{ lesson.description }}
            b-card-text.text-muted(v-if="lesson.day === 'Fridays'")
              address.text-small
                strong {{ lesson.day }}
                br
                | 8:00pm - 8:45pm ~ Beginner Lesson
                br
                | 8:45pm - 10:00pm ~ Dance Social
              div
                strong Rate:
                br
                span ${{ lesson.rate }}/person
            b-card-text.d-flex.justify-content-between.align-items-center.text-muted(v-else-if="lesson.day")
              div
                strong {{ lesson.day }}
                br
                span {{ lessonTimes }}
              div
                strong Rate:
                br
                span ${{ lesson.rate }}/person
            b-card-text.text-muted(v-else-if="lesson.rate > 0")
              div
                strong Rate:
                br
                span ${{ lesson.rate }}/45min
            b-link.card-link.text-muted(
              v-if="lesson.hasLink && [5, 10].includes(lesson.rate)"
              :to="lesson.link.url"
            ) {{ lesson.link.title }} >>
            anchor-router-link.card-link.text-muted(
              v-if="lesson.hasLink && [0, 65].includes(lesson.rate)"
              :to="{ hash: '#contact' }"
            ) {{ lesson.link.title }} >>
</template>

<script>
import AnchorRouterLink from "vue-anchor-router-link";
import d from "./lessons-data.json";

export default {
  components: {
    AnchorRouterLink
  },
  data() {
    return {
      lessonTimes: "8:00pm - 8:45pm",
      lessons: d.lessons
    };
  }
};
</script>
