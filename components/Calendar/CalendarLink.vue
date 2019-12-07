<template lang="pug" functional>
  .row.pt-5.pb-2
    .col.text-center
      p Add this #[a(href="https://calendar.google.com/calendar?cid=YmFsbHJvb21lYXN0LmNvbV90ZjdvaGdwbmExcTk2YzQ3ZHJvcXVxN2UzMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t") Google Calendar] to your account.
      p Need an offline version? #[a(href="/calendar.pdf" target="_blank" download) Download the PDF].
</template>

<script>
export default { functional: true };
</script>
