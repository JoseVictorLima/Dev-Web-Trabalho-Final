<template >
  <div class="home">
      <Menu></Menu>
      <br>
      <div class="row container">
        <div class="col-md-6 container-special">
          <h4>Receitas do Dia</h4>
        </div>
        <div class="col-md-12">
          <div class="image col-3">
            <img src="../assets/img/image_not_found.png" alt="" height="100%" width="100%">
            <figcaption>
              <a href="">receita 1</a>
            </figcaption>
          </div>
          <div class="image col-3">
            <img src="../assets/img/image_not_found.png" alt="" height="100%" width="100%">
            <figcaption>
              <a href="">receita 2</a>
            </figcaption>
          </div>
          <div class="image col-3">
            <img src="../assets/img/image_not_found.png" alt="" height="100%" width="100%">
            <figcaption>
              <a href="">receita 3</a>
            </figcaption>
          </div>
        </div>
        <div class="col-md-6 container-special">
          <h4>Top 3</h4>
        </div>
        <div class="col-md-12">
          <div class="image col-3">
            <img src="../assets/img/image_not_found.png" alt="" height="100%" width="100%">
            <figcaption>
              <a href="">Primeiro Lugar</a>
            </figcaption>
          </div>
          <div class="image col-3">
            <img src="../assets/img/image_not_found.png" alt="" height="100%" width="100%">
            <figcaption>
              <a href="">Segundo Lugar</a>
            </figcaption>
          </div>
          <div class="image col-3">
            <img src="../assets/img/image_not_found.png" alt="" height="100%" width="100%">
            <figcaption>
              <a href="">Terçeiro Lugar</a>
            </figcaption>
          </div>
        </div>
      </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    Menu
  }
}
</script>
<style>
.container-special{
  background-color: rgb(250, 219, 84);
  margin: 2% 3% 2% 3%;
  padding: 1%;
}

.container{
  background-color: rgba(255, 255, 255, 0.322);
  margin: 1%;
  max-width: 90%;
  /* max-height: 90%; */
}

.container-special h4{
  text-align: start;
}

.container-recipie{
  max-width: 90%;
  max-height: 90%;
}

.image{
  padding: 1%;
  background-color: white;
  display: inline-block;
  /* float: left; */
  margin: 2%;
  max-width: 260px;
}
</style>