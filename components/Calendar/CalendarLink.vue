<template lang="pug" functional>
  .row.pt-5.pb-2
    .col.text-center
      p Add this #[a(href="https://calendar.google.com/calendar?cid=YmFsbHJvb21lYXN0LmNvbV90ZjdvaGdwbmExcTk2YzQ3ZHJvcXVxN2UzMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t") Google Calendar] to your account.
      p Need an offline version?
      a(href="/2019.pdf" target="_blank" download) 2019 Calendar
      br
      a(href="/2020.pdf" target="_blank" download) 2020 Calendar
</template>

<script>
export default { functional: true };
</script>
