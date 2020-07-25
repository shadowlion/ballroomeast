<template>
  <div class="container py-5 text-center">
    <div class="row py-3 justify-content-center">
      <h2 class="font-weight-bold">Meet our Instructors!</h2>
    </div>
    <div class="row">
      <div
        v-for="(instructor, index) in instructors"
        :key="index"
        class="col-md-4"
      >
        <picture>
          <source :srcset="instructor.src" type="image/webp" />
          <source :srcset="instructor.altSrc" type="image/png" />
          <img
            :src="instructor.src"
            class="rounded-circle img-fluid img-thumbnail"
          />
        </picture>
        <h2 class="pt-3">{{ instructor.name }}</h2>
        <p class="text-justify">{{ instructor.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface Instructor {
  name: string;
  src: string;
  altSrc: string;
  bio: string;
}

export default Vue.extend({
  props: {
    instructors: {
      type: Array as () => Instructor[],
      required: true,
    },
  },
});
</script>
