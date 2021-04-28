<template>
  <article id="about">
    <b-jumbotron
      class="bg-pic text-center mb-0"
      text-variant="light"
      bg-variant="transparent"
      fluid
    >
      <template slot="header">Stop by and visit us!</template>
      <hr class="my-5 border-light" />
      <p class="lead text-left">
        Located in the east end of town in the heart of St. Matthews in
        Louisville, KY, Ballroom East creates an environment that would inspire
        everyone to be great dancers. Purchased in 1986, with the encouragement,
        inspiration, and passion for ballroom dancing of Dr. Alan Thomas,
        Ballroom East became a reality.
      </p>
    </b-jumbotron>
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
  </article>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      instructors: [
        {
          name: "Charles Jones",
          src:
            "https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Finstructor_charles_jones.webp?alt=media&token=c4ef8382-487a-49ef-b7eb-95be426c0684",
          altSrc:
            "https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Finstructor_charles_jones.png?alt=media&token=45c1aed5-726d-4227-bb5e-8fdb78828111",
          bio:
            "Charles is a retired ballroom professional who currently teaches both competitors and non-competitors alike and also adjudicates ballroom competitions. At one point in time, together with Linda Jackson, he was the United States Rising Star Champion in International Standard. Coupled with being a finalist in multiple competitions throughout the United States, Charles has received certifications for the highest commendation.",
        },
        {
          name: "Linda Jackson",
          src:
            "https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Finstructor_linda_jackson.webp?alt=media&token=47c3d5ef-7270-4dd7-841a-4975e128651d",
          altSrc:
            "https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Finstructor_linda_jackson.png?alt=media&token=3bbcb4e3-49cb-4d32-b14b-5752f1439649",
          bio:
            "Linda founded the Ballroom East Dance Studio in 1986. With her professional dance partnership to Charles Jones of over ten years, she went on to becoming the United States Rising Star Champion in International Standard and won numerous awards and titles across the country. Now retired, Linda currently teaches both competitors and non-competitors alike and also adjudicates ballroom competitions.",
        },
        {
          name: "Chase Abell",
          src:
            "https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Finstructor_chase_abell.webp?alt=media&token=5322420d-9599-4753-9928-0c6aabd4d2c1",
          altSrc:
            "https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Finstructor_chase_abell.png?alt=media&token=9640363c-499a-417c-b2a0-472285116418",
          bio:
            "After competing Pro/Am with Linda Jackson for many years, Chase started competing in the Amateur division. Together, with his then-parther Taylor Shorten, he became a finalist in USA Dance Nationals, Youth Division, and quarter-finalist in the Adult Division. Currently, Chase is the President of USA Dance, Louisville Chapter. He also competes Pro/Am with his students in both competitions and showcases.",
        },
      ],
    };
  },
});
</script>

<style scoped>
.bg-pic {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url("https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Fbe_building.jpg?alt=media&token=d1547740-5255-4eb6-8d2b-39ea3405ace2");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
