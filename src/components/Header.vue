<script>
export default {
  name: 'Header'
}
</script>


<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="@/assets/logo.png" width="112" height="28">
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="mainNavbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="mainNavbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          Strona Główna
        </router-link>

        <router-link class="navbar-item" to="/rulebook">
          Zasady Gry
        </router-link>

        <router-link class="navbar-item" to="/generator">
          Generator Postaci
        </router-link>

        <router-link class="navbar-item" to="/generator">
          Karta Postaci
        </router-link>

        <!-- <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Więcej
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div> -->

      <!-- <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div> -->
      </div>
    </div>
  </nav>
</template>


