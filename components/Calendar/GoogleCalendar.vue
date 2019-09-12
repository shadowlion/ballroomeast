<template lang="pug">
  .text-center#google-calendar
    iframe(
      src="https://calendar.google.com/calendar/embed?src=ballroomeast.com_tf7ohgpna1q96c47droquq7e30%40group.calendar.google.com&ctz=America%2FNew_York"
      style="border-width:0"
      frameborder="0"
      scrolling="no"
    )
</template>

<style scoped>
#google-calendar {
  height: 600px;
}

iframe {
  width: 100%;
  height: 100%;
}
</style>
