<template >
  <div class="home">
        <div>
          <br>
            <div v-if="this.receitas==undefined" class="container text-center row recipe-container">
              <img src="../assets/img/page_not_found.png" alt="">
            </div>
            <div v-if="this.receitas!=undefined" class="col-md-12" style="min-height: 200px;">
              <div v-for="(receita,index) of this.receitas" :key="index" class="image col-3 text-center">
                <div class="col-12">
                  <img v-if="receita.imagem==undefined" src="../assets/img/image_not_found.png" class="image-radial" height="100px" width="150px">
                  <img v-if="receita.imagem!=undefined" :src="receita.imagem" class="image-radial" height="100px" width="150px">
                </div>
                <br>
                <div class="col-12 text-center">
                    <span class="hidden-link middler" @click="redirecinarReceita(receita.id)"><b>{{receita.nome}}</b></span>
                </div>
                <br>
                <div class="col-12 row">
                  <div class="col-6">
                    <img src="../assets/img/iconfinder_time_clock.png" height="20px" width="20px">
                    {{receita.tempo}}
                  </div>
                  <div class="col-5">
                    <!-- <img src="../assets/img/iconfinder_food.png" height="20px" width="20px"> -->
                    {{receita.rendimento}}
                    Porções
                  </div>
                </div>
              </div>
            </div>
          <br>
        </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data(){
    return{
      receitas:[],
    }
  },

  mounted(){
    this.init()
  },

  methods:{
    async init(){
      try{
        this.carregando()
        await this.getReceitas()
        this.notcarregando()
      }catch(erro){
        if (this.$store.state.usuarioLogado.id==undefined) this.makeToast("É necessario estar Logado para acessar esta página!",'error')
        else this.makeToast("Não foi possivel carregar as receitas! Tente outra vez mais tarde!",'error')
        this.receitas = undefined
        this.notcarregando()
      }
    },
    
    async getReceitas(){
      const resp = await this.$services.usuarioReceitas.getById(this.$store.state.usuarioLogado.id)
      if(resp && resp.data) {
        this.receitas = new Array()
        this.receitas = resp.data
      }
    },

    redirecinarReceita(id){
      this.$router.push(`/receitas/${id}`)
    }

  }
}
</script>
<style>
.preparo-title{
  font-weight: bold;
}
</style>