<script>
import FeedbackModal from './FeedbackModal.vue'

export default {
  name: 'AppHeader',
  components: {
    FeedbackModal
  },
  methods: {
    closeNavbar() {
      let navbarButton = this.$refs.navbarButton;

      if (navbarButton.className.match(/\bis-active\b/)) {
        navbarButton.click();
      }
    },

    showFeedbackModal() {
      this.$options.childInterface.showFeedbackModal();
    },

    getChildInterface(childInterface) {
      this.$options.childInterface = Object.assign(this.$options.childInterface ?? {}, childInterface);
    }
  },
  watch: {
    $route() {
      this.closeNavbar();
    }
  }
}
</script>


<template>
  <nav class="is-fixed-top navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="@/assets/logo.png" width="112" height="28">
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="mainNavbar"
        ref="navbarButton">
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

        <router-link class="navbar-item" to="/character-sheet">
          E-Karta Postaci
        </router-link>

        <router-link class="navbar-item" to="/game-master-panel">
          Panel Mistrza Gry
        </router-link>

        <a class="navbar-item" href="https://drive.google.com/file/d/16uiK2bzw9yVfKFHb3Ti_J0JZ-b_XVMlC" target="_blank">
          Pobierz Kartę Postaci
        </a>

        <a class="navbar-item" @click="showFeedbackModal()">
          Prześlij opinię
        </a>

        <!-- <a class="navbar-item" href="assets/logo-single.png" target="_blank" download>
          Pobierz Kartę Postaci
        </a> -->

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

  <FeedbackModal @interface="getChildInterface"></FeedbackModal>
</template>

<style scoped>
.navbar-item:focus {
  background-color: #52525E;
  color: white;
}
</style>
