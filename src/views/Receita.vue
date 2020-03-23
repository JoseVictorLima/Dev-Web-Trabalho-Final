<template>
  <div class="about">
    <br>
    <Menu></Menu>
    <br>
    <div v-if="receita==undefined" class="container text-center row recipe-container">
      <img src="../assets/img/page_not_found.png" alt="">
    </div>
    <div v-if="receita!=undefined" class="container text-center row recipe-container">
      <br>
      <br>
      <div v-if="receita.id!=undefined" class="col-12 ">
        <h1>{{receita.nome}}</h1>
      </div>
      <br>
      <div v-if="receita.id!=undefined" class="col-12 row text-left">
        <div class="col-4 recipe-image">
          <br>
          <br>
          <img v-if="receita.imagem==undefined" src="../assets/img/image_not_found.png" class="" alt="" height="100%" width="100%">
          <img v-if="receita.imagem!=undefined" :src="`${receita.imagem}`" class="" alt="" height="100%" width="100%">
          <br>
          <br>
          <div class="row">
            <div class="preparo-title col-6">
              <img src="../assets/img/iconfinder_time_clock.png" alt="../assets/img/iconfinder_time_clock.png" height="30px" width="30px">
              {{receita.tempo}}
            </div>
            <div class="preparo-title col-6">
              <img src="../assets/img/iconfinder_food.png" alt="../assets/img/iconfinder_food.png" height="30px" width="30px">
              {{receita.rendimento}}
            </div>
            <br>
            <br>
            <div class="col-12">
              <div class="col-12 text-center preparo-title">Ingredientes</div>
              <div v-for="(igrediente,index) of this.receita.igredientes" :key="index" class="col-12">
                <li>{{igrediente.value}} {{igrediente.label}}</li>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8">
          <br>
          <h4 class="text-center">Modo de Preparo</h4>
          <fieldset class="recipe-text">
            <div>
              <p>{{receita.preparo}}</p>
            </div>
              <!-- <h5 v-if="preparo.type=='title'" class="preparo-title">{{preparo.label}}</h5> -->
          </fieldset>
        </div>

      <!-- <p>Um sistema de compartilhamento de receitas, parecido com o TudoGostoso.</p> -->
      <!-- <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a ab laborum libero ut soluta, dicta neque aut illum harum blanditiis provident deserunt minus. Sit, iste molestias. Doloremque, maiores error?</P> -->
      <!-- <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis aut veritatis dicta cumque voluptas officia sed, ad optio cum quisquam delectus ut culpa! Tempore error in ut nobis unde exercitationem.</P> -->
      <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fuga enim eveniet officiis magnam nemo exercitationem ipsum illo. Impedit necessitatibus vel reiciendis inventore nulla illum eos corrupti a neque iusto.</p> -->
    </div>
    <br>
    <br>
    <div v-if="receita.id!=undefined" class="col-1">
      <br>
      <button class="btn btn-danger" @click="deletar(receita.id)" type="button">Deletar</button>
    </div>
  </div>
  </div>
</template>
<script>
import Menu from '@/components/Menu.vue'
export default {
  components:{
    Menu
  },

  data(){
    return{
      receita:{
        nome: String,
        img: String,
        ingredientes: Array,
        preparo: Array,
        rendimento: Number,
        tempo: String,
      }
    }
  },

  mounted(){
    this.init()
  },

  methods:{
    async init(){
      let id = this.$route.params.id
      await this.getReceita(id)
    },

    async getReceita(id){
      try{
        const resp = await this.$services.receitas.getById(this.$route.params.id);
        // console.log(resp)
        if(resp && resp.data){
          this.receita = resp.data
        }
        else{
          this.makeToast("Não foi possivel carregar a receita! Tente outra vez mais tarde!",'error')
        }
      }catch(erro){
        this.makeToast("Não foi possivel carregar a receita! Tente outra vez mais tarde!",'error')
        this.receita = undefined
      }
      // this.receita = this.generateStaticRecipe(id)
    },

    async deletar(id){
      try{
        // if(id==1||id==2||id==3) return
        const resp = await this.$services.receitas.delete(id)
        console.log(resp)
        if(resp.statusText=='OK'){
          this.makeToast("Receita Deletada com sucesso",'success')
          this.$router.push(`/receitas`)
        }
      }catch(erro){
        this.makeToast("Não foi possivel deltar a receita! Tente outra vez mais tarde!",'error')
      }
    },

  }
}
</script>
<style>
.recipe-container{
  display: flex;
}

.recipe-image{
  align-self:flex-start;
}

.recipe-text{
  padding: 2%;
  border: solid;
  border-color: rgba(66, 66, 66, 0.473);
  border-width: 1px;
}
.preparo-title{
  font-weight: bold;
}

</style>