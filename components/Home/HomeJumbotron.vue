<template lang="pug" functional>
  b-jumbotron.bg-pic.text-center.mb-5(
    text-variant="light"
    bg-variant="transparent"
    fluid
  )
    template(slot="header") Ballroom East Dance Studio
    template(slot="lead") Let's get you dancing!
    hr.my-5.border-light
    p.lead.text-left Whether you want to learn anything from Salsa, Swing, to Waltz or Tango, our dance instructors will ensure the pace is comfortable and dances easy to learn. If you have always dreamt of becoming a dance maestro, then Ballroom East is the studio for you! Regardless of age or experience, Ballroom East has the savvy instructors and dance knowledge to make sure your learning experience is comfortable and effective.
</template>

<script>
export default {
  functional: true
};
</script>

<style scoped>
.bg-pic {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2FOnH.jpg?alt=media&token=8b5c7ffc-9702-4853-afa9-e0a0fb87d4a2");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
