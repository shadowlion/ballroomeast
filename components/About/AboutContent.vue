<template lang="pug">
  .container.py-5.text-center
    .row.py-3.justify-content-center
      h2.font-weight-bold Meet our instructors!
    .row
      .col-12.col-sm(v-for="(instructor, index) in instructors" :key="index")
        picture
          source(:srcset="instructor.src" type="image/webp")
          source(:srcset="instructor.altSrc" type="image/png")
          img.rounded-circle.img-fluid.img-thumbnail(:src="instructor.src")
        h2.pt-3 {{ instructor.name }}
        p.text-justify {{ instructor.bio }}
</template>

<script>
import d from "./instructor-data.json";

export default {
  data() {
    return {
      instructors: d.instructors
    };
  }
};
</script>
