<template lang="pug" functional>
  .text-center
    b-row
      b-col(lg="2").d-none.d-lg-block
      b-col
        b-embed(
          type="iframe"
          aspect="1by1"
          src="https://calendar.google.com/calendar/embed?src=ballroomeast.com_tf7ohgpna1q96c47droquq7e30%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA"
        )
      b-col(lg="2").d-none.d-lg-block
    //- iframe(
    //-   src="https://calendar.google.com/calendar/embed?src=ballroomeast.com_tf7ohgpna1q96c47droquq7e30%40group.calendar.google.com&ctz=America%2FNew_York"
    //-   style="border-width:0"
    //-   frameborder="0"
    //-   scrolling="no"
    //- )
</template>

<script>
export default {
  functional: true
};
</script>
