<template>
  <footer id="contact" class="text-white bg-dark">
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-4 pb-4">
          <nuxt-link to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ballroom-east.appspot.com/o/public%2Fbe_white.svg?alt=media&token=6d213017-256a-480c-9970-ee4baad0a941"
              alt="Ballroom East Logo"
              width="60px"
            />
          </nuxt-link>
          <p>&copy; 1986-{{ new Date().getFullYear() }}</p>
        </div>
        <div class="col-md-4 pb-4">
          <p><strong>Contact Us!</strong></p>
          <ul class="list-unstyled text-small">
            <li>
              <a href="tel:5023964207" class="text-light">(502) 396-4207</a>
            </li>
            <li>
              <a href="mailto:linda@ballroomeast.com" class="text-light">
                linda@balllroomeast.com
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 pb-4">
          <p><strong>Visit Us!</strong></p>
          <a
            href="https://maps.google.com/maps/place/Ballroom+East/@38.2348982,-85.6417317,17z/data=!3m1!4b1!4m5!3m4!1s0x88690ad4bec9d4db:0xecdb76260813022d!8m2!3d38.234894!4d-85.639543"
            class="text-light"
          >
            <address>
              906 Dupont Road
              <br />
              Louisville, KY 40207
            </address>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
