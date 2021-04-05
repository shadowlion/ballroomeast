<template>
  <b-card
    :title="lesson.title"
    :img-src="lesson.imgUrl"
    img-top
    tag="article"
    class="mb-2"
  >
    <b-card-text class="text-justify">{{ lesson.description }}</b-card-text>
    <b-card-text v-if="lesson.day === 'Fridays'" class="text-muted">
      <address class="text-small">
        <strong>{{ lesson.day }}</strong>
        <br />
        8:00pm - 8:45pm ~ Beginner Lesson
        <br />
        8:45pm - 10:00pm ~ Dance Social
      </address>
      <address>
        <strong>Rate:</strong>
        <br />
        <span>${{ lesson.rate }}/person</span>
      </address>
    </b-card-text>
    <b-card-text
      v-else-if="lesson.day"
      class="d-flex justify-content-between align-items-center text-muted"
    >
      <address>
        <strong>{{ lesson.day }}</strong>
        <br />
        <span>8:00pm - 8:45pm</span>
      </address>
      <address>
        <strong>Rate:</strong>
        <br />
        <span>${{ lesson.rate }}/person</span>
      </address>
    </b-card-text>
    <b-card-text v-else-if="lesson.rate > 0" class="text-muted">
      <address>
        <strong>Rate:</strong>
        <br />
        <span>${{ lesson.rate }}/45 minutes</span>
      </address>
    </b-card-text>
    <b-card-text
      v-if="lesson.rates && lesson.rates.length > 0"
      class="text-muted"
    >
      <small>
        Starting May 1, 2021, the rates will change to the following:
      </small>
      <address>
        <span v-for="(rate, idx) in lesson.rates" :key="idx">
          <br />
          <span>${{ rate.price }}/{{ rate.time }} minutes</span>
        </span>
      </address>
    </b-card-text>
    <nuxt-link
      v-if="lesson.hasLink && [5, 10].includes(lesson.rate)"
      :to="lesson.link.url"
      class="card-link text-muted"
    >
      {{ lesson.link.title }} >>
    </nuxt-link>
    <nuxt-link
      v-if="lesson.hasLink && [0, 65].includes(lesson.rate)"
      to="/contact"
      class="card-link text-muted"
    >
      {{ lesson.link.title }} >>
    </nuxt-link>
  </b-card>
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
    lesson: {
      type: Object as () => Lesson,
      required: true,
    },
  },
});
</script>
