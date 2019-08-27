<template lang="pug">
  b-jumbotron.bg-pic.text-center.mb-0(
    text-variant="light"
    bg-variant="transparent"
    fluid
  )
    template(slot="header") Stop by and visit us!
    hr.my-5.border-light
    p.lead.text-left Located in the east end of town in the heart of St. Matthews in Louisville, KY, Ballroom East creates an environment that would inspire everyone to be great dancers. Purchased in 1986, with the encouragement, inspiration, and passion for ballroom dancing of Dr. Alan Thomas, Ballroom East became a reality.
</template>

<style scoped>
.bg-pic {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url("https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Fbe_building.jpg?alt=media&token=d1547740-5255-4eb6-8d2b-39ea3405ace2");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
