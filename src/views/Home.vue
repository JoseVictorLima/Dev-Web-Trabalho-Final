<template >
  <div class="home">
      
      <!-- <button @click="meuToast()">Toast</button> -->
      <div v-if="this.top3==undefined && this.novos==undefined" class="container text-center row recipe-container">
              <img src="../assets/img/page_not_found.png" alt="">
      </div>
      <div v-if="this.top3!=undefined && this.novos!=undefined" class="row" style="max-width:1300px; min-height: 200px;">
        <div class="col-md-6 container-special">
          <!-- <pre>{{this.usuarioLogado}}</pre> -->
          <h4>Receitas do Dia</h4>
        </div>
          <div class="col-md-12" v-if="this.novos!=undefined">
            <div v-for="(receita,index) of this.novos" :key="index" class="image col-3 text-center">
              <img v-if="receita.imagem==null" src="../assets/img/image_not_found.png" class="image-radial" alt="" height="100px" width="150px">
              <img v-if="receita.imagem!=null" :src="receita.imagem" class="image-radial" alt="" height="100px" width="150px">
              <figcaption>
                <div class="hidden-link" @click="redirecinarReceita(receita.id)">{{receita.nome}}</div>
              </figcaption>
            </div>
          </div>
          <!-- <div class="image col-3 text-center">
            <img src="../assets/img/lasanha_bolonhesa.jpg" class="image-radial" alt="" height="100px" width="150px">
            <figcaption>
              <div class="hidden-link" @click="redirecinarReceita('2')">Lasanha à Bolonhesa</div>
            </figcaption>
          </div>
          <div class="image col-3 text-center">
            <img src="../assets/img/cachorro_quente.jpg" class="image-radial" alt="" height="100px" width="150px">
            <figcaption>
              <div class="hidden-link" @click="redirecinarReceita('3')">Cachorro Quente</div>
            </figcaption>
          </div> -->
        <!-- </div> -->
        <div class="col-md-6 container-special">
          <h4>Top 3</h4>
        </div>
        <div class="col-md-12" v-if="top3!=undefined">
          <div v-for="(receita,index) of top3" :key="index" class="image col-3 text-center">
            <img v-if="receita.imagem==null" src="../assets/img/image_not_found.png" class="image-radial" alt="" height="100px" width="150px">
            <img v-if="receita.imagem!=null" :src="receita.imagem" class="image-radial" alt="" height="100px" width="150px">
            <figcaption>
              <div class="hidden-link" @click="redirecinarReceita(receita.id)">{{receita.nome}}</div>
            </figcaption>
          </div>
        </div>
        <!-- <div class="col-md-12">
          <div class="image col-3 text-center">
            <img src="../assets/img/pudim_leite.jpg" class="image-radial" alt="" height="100px" width="150px">
            <figcaption>
              <div class="hidden-link" @click="redirecinarReceita('1')">Primeiro Lugar</div>
            </figcaption>
          </div>
          <div class="image col-3 text-center">
            <img src="../assets/img/lasanha_bolonhesa.jpg" class="image-radial" alt="" height="100px" width="150px">
            <figcaption>
              <div class="hidden-link" @click="redirecinarReceita('2')">Segundo Lugar</div>
            </figcaption>
          </div>
          <div class="image col-3 text-center">
            <img src="../assets/img/cachorro_quente.jpg" class="image-radial" alt="" height="100px" width="150px">
            <figcaption>
              <div class="hidden-link" @click="redirecinarReceita('3')">Terçeiro Lugar</div>
            </figcaption>
          </div>
        </div> -->
      </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'home',
  components: {
  },
  data(){
    return{
      top3:undefined,
      novos:undefined,
    }
  },

  mounted(){
    this.init()
  },

  methods:{
    async init(){
      // try{
        this.carregando()
        await this.getTop3()
        await this.getNovos()
        this.notcarregando()
      // }catch(erro){
      //   this.makeToast("Não foi possivel carregar as receitas! Tente outra vez mais tarde!",'error')
      // }
    },
    async getTop3(){
      try{
        const resp = await this.$services.top3.getAll()
        // console.log(resp)
        if(resp) {
          this.top3 = new Array()
          // this.top3 = resp.data
          for(let data of resp.data){
            if(data!=null) this.top3.push(data)
          }
          // for(let receita of resp.data){
          //   const receitaResp = await this.$services.receitas.getById(receita.receitaId)
          //   if(receitaResp) this.top3.push(receitaResp.data)
          // }
        }
      }catch(erro){
        this.makeToast("Não foi possivel carregar o top 3! Tente outra vez mais tarde!",'error')
      }
    },
    async getNovos(){
      try{
        const resp = await this.$services.novos.getAll()
        // console.log(resp)
        if(resp) {
          this.novos = new Array()
          // this.novos = resp.data
          for(let data of resp.data){
            if(data!=null) this.novos.push(data)
          }
          // for(let receita of resp.data){
          //   const receitaResp = await this.$services.receitas.getById(receita.receitaId)
          //   if(receitaResp) this.novos.push(receitaResp.data)
          // }
        }
      }catch(error){
        this.makeToast("Não foi possivel carregar as novas receitas! Tente outra vez mais tarde!",'error')
      }
    },
    async loadReceita(){

    },
    // meuToast(){
    //   this.makeToast("Teste de Toast")
    // },
    redirecinarReceita(id){
      this.$router.push(`/receitas/${id}`)
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