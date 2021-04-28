<template>
  <header>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Fbe_white.svg?alt=media&token=6d213017-256a-480c-9970-ee4baad0a941"
            alt="logo"
            width="60px"
          />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto text-center">
            <b-nav-item to="/" link-classes="text-light">Home</b-nav-item>
            <b-nav-item to="/calendar" link-classes="text-light">
              Calendar
            </b-nav-item>
            <b-nav-item to="/lessons" link-classes="text-light">
              Lessons
            </b-nav-item>
            <b-nav-item to="/about" link-classes="text-light">
              About Us
            </b-nav-item>
            <b-nav-item to="/contact" link-classes="text-light">
              Contact
            </b-nav-item>
            <b-nav-item
              to="https://facebook.com/ballroomeast"
              link-classes="text-light d-block d-sm-none"
            >
              Find us on Facebook!
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        <a
          href="https://facebook.com/ballroomeast"
          target="_blank"
          class="text-light px-4 d-none d-sm-block"
          rel="noreferrer"
        >
          <fa class="fa-2x" :icon="['fab', 'facebook-square']" />
          <span class="sr-only">Facebook Page</span>
        </a>
      </div>
    </b-navbar>
  </header>
</template>
