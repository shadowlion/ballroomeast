<template lang="pug">
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

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    lesson: {
      type: Object,
      required: true,
    },
  },
});
</script>
