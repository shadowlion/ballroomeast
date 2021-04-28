<template>
  <article id="calendar">
    <div class="container py-5">
      <div class="row text-center justify-content-center">
        <div class="col-md-8">
          <b-embed
            type="iframe"
            aspect="1by1"
            src="https://calendar.google.com/calendar/embed?src=ballroomeast.com_tf7ohgpna1q96c47droquq7e30%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA"
          />
        </div>
      </div>
      <div class="row pt-5 pb-2">
        <div class="col text-center">
          <p>
            Add this
            <a
              href="https://calendar.google.com/calendar?cid=YmFsbHJvb21lYXN0LmNvbV90ZjdvaGdwbmExcTk2YzQ3ZHJvcXVxN2UzMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
            >
              Google Calendar
            </a>
            to your account.
          </p>
          <p>Need an offline version?</p>
          <a href="/2020.pdf" target="_blank" download>2020 Calendar</a>
        </div>
      </div>
    </div>
  </article>
</template>
