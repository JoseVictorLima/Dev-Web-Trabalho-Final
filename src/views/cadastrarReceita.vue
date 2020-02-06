<template>
  <div class="about">
    <br>
    <Menu></Menu>
    <br>
    <div class="container">
      <form class="row">
        <div class="form-group col-12">
          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Nome da receita" v-model="receita.nome">
        </div>
        <div class="form-group col-12">
          <label for="exampleFormControlFile1">Imagem</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="fileSelected">
        </div>
        <div class="form-group col-6">
          <label for="receitaTempo">Tempo</label>
          <input type="text" class="form-control" id="receitaTempo" placeholder="Tempo de preparo" v-model="receita.tempo">
          <label for="receitaRendimento">Porção</label>
          <input type="text" class="form-control" id="receitaRendimento" placeholder="Rendimento" v-model="receita.rendimento">
        </div>
        <div class="form-group col-12">
          <label style="margin-right: 1% !important;" for="receitaAdd">Ingredientes</label>
          <button class="btn btn-success" @click="adicionarNovoIgrediente()" type="button" >+</button>
          <div class="col-12" id=receitaAdd v-for="(igrediente,index) of receita.igredientes" :key="index">
            <br>
            <hr>
            <div class="col-12 row">
              <div class="col-3">
                <label :for="`label${index}`">Nome: </label>
                <br>
                <input type="text" :id="`label${index}`" :name="`label${index}`" placeholder="Cenoura" v-model="igrediente.label">
              </div>
              <div class="col-3">
                <label :for="`label${index}`">Quantidade: </label>
                <br>
                <input type="number" :id="`label${index}`" :name="`label${index}`" v-model="igrediente.value">
              </div>
              <div class="col-1">
                <button @click="removerIgrediente(igrediente)" class="btn btn-danger" type="button">Remover</button>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group col-12">
          <label for="exampleFormControlTextarea1">Preparo</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" v-model="receita.preparo"></textarea>
        </div>
        <div class="col-3">
          <button type="button" class="btn btn-primary" @click="salvar()">Salvar</button>
        </div>
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
        preparo:undefined,
      }
    }
  },

  mounted(){
    this.init()
  },

  methods:{
    init(){

    },

    adicionarNovoIgrediente(){
      this.receita.igredientes.push(
        {
          label: undefined,
          value: 0,
        }
      )
    },

    removerIgrediente(igrediente){
      if(igrediente!=undefined){
        let index = undefined
        index = this.receita.igredientes.indexOf(igrediente)
        if(index!=undefined) this.receita.igredientes.splice(index,1)
      }
    },

     fileSelected(event) {
        const input = event.target;
        if (input.files) {
          this.files = []
          for (const file of input.files) {
            this.fileReader(file);
          }
        }
      },

    fileReader(file) {
      // console.log(file)
      let reader = new FileReader();
      reader.onload = e => {
        let f = e.target.result
        // return f
        this.receita.img = f
      };
      // console.log(this.receita)
      reader.readAsDataURL(file);
      },

    async salvar(){
      try{
        const resp = await this.$services.receitas.post(this.receita)
        // console.log(resp)
        if(resp && resp.data){
          this.makeToast("Receita salva com sucesso!",'success')
          this.$router.push('/')
        }
      }catch(error){
        // console.log(error)
        this.makeToast("Não foi possivel salvar! Tente outra vez mais tarde!",'error')
      }
    }
  },
}
</script>
<style scoped>
</style>