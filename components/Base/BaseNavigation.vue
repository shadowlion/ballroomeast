<template lang="pug" functional>
  b-navbar(toggleable="sm" type="dark" variant="dark")
    .container
      b-navbar-brand(to="/")
        b-img(src="https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Fbe_white.svg?alt=media&token=6d213017-256a-480c-9970-ee4baad0a941" width="60px")
      b-navbar-toggle(target="nav-collapse")
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav.ml-auto.text-center
          b-nav-item(to="/") Home
          b-nav-item(to="/calendar") Calendar
          b-nav-item(to="/lessons") Lessons
          b-nav-item(to="/about") About Us
          b-nav-item(to="#contact") Contact
          b-nav-item.d-block.d-sm-none(to="https://facebook.com/ballroomeast") Find us on Facebook!
      b-navbar-brand.text-light.px-4.d-none.d-sm-block(href="https://facebook.com/ballroomeast" target="_blank")
        fa.fa-2x(:icon="['fab', 'facebook-square']")
</template>

<script>
export default {
  functional: true
};
</script>
