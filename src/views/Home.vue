<template >
  <div class="home">
      <br>
      <Menu></Menu>
      <br>
      <div class="row">
        <div class="col-md-6 container-special">
          <h4>Receitas do Dia</h4>
        </div>
        <div class="col-md-12">
          <div class="image col-3 text-center">
            <img src="../assets/img/image_not_found.png" class="image-radial" alt="" height="100%" width="100%">
            <figcaption>
              <div class="hidden-link" @click="redirecinarReceita('1')">receita 1</div>
            </figcaption>
          </div>
          <div class="image col-3 text-center">
            <img src="../assets/img/image_not_found.png" class="image-radial" alt="" height="100%" width="100%">
            <figcaption>
              <div class="hidden-link" @click="redirecinarReceita('2')">receita 2</div>
            </figcaption>
          </div>
          <div class="image col-3 text-center">
            <img src="../assets/img/image_not_found.png" class="image-radial" alt="" height="100%" width="100%">
            <figcaption>
              <div class="hidden-link" @click="redirecinarReceita('3')">receita 3</div>
            </figcaption>
          </div>
        </div>
        <div class="col-md-6 container-special">
          <h4>Top 3</h4>
        </div>
        <div class="col-md-12">
          <div class="image col-3 text-center">
            <img src="../assets/img/image_not_found.png" class="image-radial" alt="" height="100%" width="100%">
            <figcaption>
              <div class="hidden-link" @click="redirecinarReceita('4')">Primeiro Lugar</div>
            </figcaption>
          </div>
          <div class="image col-3 text-center">
            <img src="../assets/img/image_not_found.png" class="image-radial" alt="" height="100%" width="100%">
            <figcaption>
              <div class="hidden-link" @click="redirecinarReceita('5')">Segundo Lugar</div>
            </figcaption>
          </div>
          <div class="image col-3 text-center">
            <img src="../assets/img/image_not_found.png" class="image-radial" alt="" height="100%" width="100%">
            <figcaption>
              <div class="hidden-link" @click="redirecinarReceita('6')">Terçeiro Lugar</div>
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
  },
  methods:{
    redirecinarReceita(id){
      this.$router.push(`/receita/${id}`)
    }
  }
}
</script>
<style>
div.hidden-link{
  color: rgb(0, 0, 0);
}
div.hidden-link:hover{
    color: rgb(105, 105, 105);
    cursor: pointer;
}


.container-special{
  border-radius: 10px;
  background-color: rgb(250, 219, 84);
  margin: 2% 3% 2% 3%;
  padding: 1%;
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
  border-radius: 10px;
  background-color: rgb(233, 231, 231);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  display: inline-block;
  /* float: left; */
  margin: 2%;
  max-width: 260px;
}

.image-radial{
  border-radius: 10px 
}

</style>