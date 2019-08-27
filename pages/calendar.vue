<template lang="pug">
  section#calendar
    .container.py-5
      google-calendar
      calendar-download
</template>

<script>
import GoogleCalendar from "@/components/Calendar/GoogleCalendar";
import CalendarDownload from "@/components/Calendar/CalendarDownload";

export default {
  components: {
    GoogleCalendar,
    CalendarDownload
  }
};
</script>
