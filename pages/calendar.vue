<template lang="pug">
  section#calendar
    .container.py-5
      google-calendar
      calendar-link
</template>

<script>
import GoogleCalendar from "@/components/Calendar/GoogleCalendar";
import CalendarLink from "@/components/Calendar/CalendarLink";

export default {
  components: {
    GoogleCalendar,
    CalendarLink
  }
};
</script>
