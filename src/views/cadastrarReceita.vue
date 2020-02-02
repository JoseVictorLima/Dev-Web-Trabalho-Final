<template>
  <div class="about">
    <br>
    <Menu></Menu>
    <br>
    <div class="container">
      <form>
      <div class="form-group">
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Nome da receita" v-model="receita.nome">
      </div>
      <div class="form-group">
        <label for="exampleFormControlFile1">Exemplo de input de arquivo</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1">
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Tempo</label>
        <input type="text" class="form-control" id="exampleInputPassword1" v-model="receita.tempo">
        <label for="exampleInputPassword1">Porção</label>
        <input type="text" class="form-control" id="exampleInputPassword1" v-model="receita.rendimento">
      </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Ingredientes</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Preparo</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <button type="button" class="btn btn-primary" @click="salvar()">Salvar</button>
</form>
    </div>
    <br>
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
        igredientes:[],
        preparos:[],

      }
    }
  },

  mounted(){
    this.init()
  },

  methods:{
    init(){

    },

    async salvar(){
      try{
        const resp = await this.$services.receitas.post(this.receita)
        console.log(resp)
        if(resp && resp.data){
          this.makeToast("Receita salva com sucesso!",'success')
        }
      }catch(error){
        console.log(error)
        this.makeToast("Não foi possivel salvar! Tente outra vez mais tarde!",'error')
      }
    }
  },
}
</script>
