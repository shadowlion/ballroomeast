<template>
  <section id="about">
    <about-jumbotron />
    <about-content :instructors="instructors" />
  </section>
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
