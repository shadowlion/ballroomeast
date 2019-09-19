<template lang="pug">
  .text-center#google-calendar
    iframe(
      src="https://calendar.google.com/calendar/embed?src=ballroomeast.com_tf7ohgpna1q96c47droquq7e30%40group.calendar.google.com&ctz=America%2FNew_York"
      style="border-width:0"
      frameborder="0"
      scrolling="no"
    )
    //- iframe.d-none.d-md-block(
    //-   src="https://calendar.google.com/calendar/embed?src=ballroomeast.com_tf7ohgpna1q96c47droquq7e30%40group.calendar.google.com&ctz=America%2FNew_York&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1"
    //-   style="border-width:0"
    //-   frameborder="0"
    //-   scrolling="no"
    //- )
    //- iframe.d-block.d-md-none(
    //-   src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=YmFsbHJvb21lYXN0LmNvbV90ZjdvaGdwbmExcTk2YzQ3ZHJvcXVxN2UzMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23B39DDB&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1&amp;mode=AGENDA"
    //-   style="border-width:0"
    //-   frameborder="0"
    //-   scrolling="no"
    //- )
</template>

<style scoped>
#google-calendar {
  height: 600px;
}

iframe {
  width: 100%;
  height: 600px;
}
</style>
