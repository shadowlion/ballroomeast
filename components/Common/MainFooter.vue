<template lang="pug" functional>
  footer.text-white.bg-dark#contact
    .container.pt-5
      .row
        .col-12.col-md.pb-5
          b-link(to="/")
            img(src="https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Fbe_white.svg?alt=media&token=6d213017-256a-480c-9970-ee4baad0a941" width="60px")
          p &copy; 1986-{{ new Date().getFullYear() }}
        .col-12.col-md.pb-5
          h5 Contact Us!
          ul.list-unstyled.text-small
            li
              b-link.text-light(href="tel:5023964207") (502) 396-4207
            li
              b-link.text-light(href="mailto:linda@ballroomeast.com") linda@ballroomeast.com
        .col-12.col-md.pb-5
          h5 Visit Us!
          b-link.text-light(href="https://maps.google.com/maps/place/Ballroom+East/@38.2348982,-85.6417317,17z/data=!3m1!4b1!4m5!3m4!1s0x88690ad4bec9d4db:0xecdb76260813022d!8m2!3d38.234894!4d-85.639543")
            address
              | 906 Dupont Road
              br
              | Louisville, KY 40207
</template>

<script>
export default {
  functional: true
};
</script>
