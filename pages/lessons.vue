<template>
  <article id="lessons">
    <section>
      <b-jumbotron class="text-center mb-0" bg-variant="white" fluid>
        <template slot="header">Lessons</template>
        <hr class="my-5" />
        <p class="lead text-muted text-justify">
          All of our lessons have a purpose. To have fun and at the same time
          transform the dancing into something great, whether for social dancing
          or competitive dancing.
        </p>
        <p class="lead text-muted text-justify">
          A dance partner is not required for any of these lessons. There is no
          up-front financial commitment, and you only pay for the classes you
          attend.
        </p>
      </b-jumbotron>
    </section>
    <section class="bg-light">
      <div class="container py-5">
        <div class="row">
          <div
            v-for="(lesson, index) in lessons"
            :key="index"
            class="col-md-6 col-lg-4"
          >
            <LessonCard :lesson="lesson" />
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      lessons: [
        {
          imgUrl:
            "https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Fbeginner.jpg?alt=media&token=0454eac8-68cc-46c3-b864-54062d92efbd",
          title: "Group - Beginner",
          description:
            "All Beginner Group Classes are open to the public and usually consists of 16 to 55 people. Beginners especially like the opportunity to meet and dance with other novice dancers and are given the opportunity to rotate partners frequently throughout the group lesson (or stay with one partner if they wish - no pressure!). This lesson is the perfect blend of instruction and social ambiance.",
          day: "Wednesdays",
          rate: 5,
          hasLink: true,
          link: {
            title: "Check the Calendar",
            url: "/calendar",
          },
        },
        {
          imgUrl:
            "https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Fintermediate.jpg?alt=media&token=d16f98e8-a3cc-49f9-ab5c-f740e4d3c072",
          title: "Group - Intermediate",
          description:
            "Once you finish a month of Beginner Group Classes you can move into the Tuesday night Intermediate Group Classes and continue learning the same dance for another month. This gives you the opportunity to learn more steps and more techniques making you a better dancer in that particular dance.",
          day: "Tuesdays",
          rate: 5,
          hasLink: true,
          link: {
            title: "Check the Calendar",
            url: "/calendar",
          },
        },
        {
          imgUrl:
            "https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Fadvanced.jpg?alt=media&token=ae88e736-5a06-4991-bb38-fc634b09e7b9",
          title: "Group - Advanced",
          description:
            "After you have gone through the Beginner and Intermediate Group Classes, our Advanced Class is perfect for you if you would like to learn some more complicated figures and advanced techniques. Building off the material taught in our Intermediate and Beginner Classes, the Advanced Group Class provides a chance practice your skills with a diversity of moderately skilled partners.",
          day: "Mondays",
          rate: 10,
          hasLink: true,
          link: {
            title: "Check the Calendar",
            url: "/calendar",
          },
        },
        {
          imgUrl:
            "https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Fsocial.jpg?alt=media&token=d6983cfe-c1f7-4d4e-b929-c4a4499fc061",
          title: "Group - Social Party",
          description:
            "Every so often, we host Friday night social dance parties. These nights normally consist of a Beginner Class (we don't teach the same dance that happens on Wednesdays), followed by some social dancing.",
          day: "Fridays",
          rate: 5,
          hasLink: true,
          link: {
            title: "Check the Calendar",
            url: "/calendar",
          },
        },
        {
          imgUrl:
            "https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Fprivate.jpg?alt=media&token=2ed69bb4-b76a-42a3-815c-631ec5f49589",
          title: "Private Lessons",
          description:
            "Private lessons are available for dancers of all ages and experience levels. This is arguably the best way to become a better dancer, faster. Together, with your instructor, you can decide which are the best mix of dances to learn and which skillsets are best for your level of dance.",
          rate: 0,
          rates: [
            { price: 55, time: 30 },
            { price: 80, time: 45 },
            { price: 110, time: 60 },
          ],
          hasLink: true,
          link: {
            title: "Contact Us to Schedule",
            url: "/contact",
          },
        },
        {
          imgUrl:
            "https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Fcustom.jpg?alt=media&token=1b7b6726-17bb-4ec7-8c8a-3a8c764db54c",
          title: "Customized Services",
          description:
            "Out-of-town coaching, private wedding party/group lessons, classes for kids - if you need something more tailored to your liking, contact us and we'll work with you to getting that set up.",
          rate: 0,
          hasLink: true,
          link: {
            title: "Contact Us to Schedule",
            url: "/contact",
          },
        },
      ],
    };
  },
});
</script>
