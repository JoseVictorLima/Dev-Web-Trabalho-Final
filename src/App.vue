<template>
  <div id="app" class="background">
    <user-menu v-if="this.$store.state.usuarioLogado.id!=undefined" ></user-menu>
    <br>
    <Menu v-if="this.$router.currentRoute.path!='/login'"></Menu>
    <br>
    <!-- <pre>{{this.$store.state.isLoading}}</pre> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div v-show="this.$store.state.isLoading==true" class="container-carregando text-center" style="display: block">
      <br>
      <br>
      <br>
      <h2>Carregando....</h2>
      <br>
    </div>
    <div v-show="this.$store.state.isLoading!=true">
      <router-view :key="$route.fullPath"/>
    </div>
    <div class="wrapper">
      <div class="push"></div>
      <custom-footer></custom-footer>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import UserMenu from '@/components/UserMenu.vue'
// @ is an alias to /src
import CustomFooter from './components/Footer.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    Menu,
    CustomFooter,
    UserMenu
  }
}
</script>

<style>

html, body {
    height: 100%;
}

.wrapper {
    min-height: 100%;
    height: auto !important;
    height: 100%;
    margin: 0 auto -142px; /* the bottom margin is the negative value of the footer's height */
}
.footer, .push {
    height: 142px; /* .push must be the same height as .footer */
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  /* padding: 10px; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
