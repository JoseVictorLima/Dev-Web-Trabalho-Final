<template>
  <div class="about">
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
          <div class="col-12" id=receitaAdd v-for="(igrediente,index) of igredientes" :key="index">
            <br>
            <hr>
            <div class="col-12 row">
              <div class="col-3" v-if="igrediente.unidade.value!='NENHUMA'">
                <label :for="`label${index}`">Quantidade: </label>
                <br>
                <input type="number" :id="`label${index}`" :name="`label${index}`" v-model="igrediente.value">
              </div>
              <div class="col-3">
                <label :for="`label${index}`">Unidade: </label>
                <br>
                <v-select :options="unidadesMedida" v-model="igrediente.unidade"></v-select>
              </div>
              <div class="col-3">
                <label :for="`label${index}`">Nome: </label>
                <br>
                <input type="text" :id="`label${index}`" :name="`label${index}`" placeholder="Cenoura" v-model="igrediente.label">
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
          <button type="button" class="btn btn-secondary" @click="redirect('back')">Cancelar</button>
        </div>
      </form>
    </div>
    <br>
  </div>
</template>
<script>
import vSelect from "vue-select";
export default {
  components:{
    vSelect,
  },
  data(){
    return{
      unidadesMedida:[
        {
          label:"Quantidade",
          value:"QUANTIDADE"
        },
        {
          label:"Quilo(s)",
          value:"QUILO"
        },
        {
          label:"Grama(s)",
          value:"GRAMA"
        },
        {
          label:"Xícara(s)",
          value:"XICARA"
        },
        {
          label:"Xícara(s) de chá",
          value:"XICARADECHA"
        },
        {
          label:"Colher(es)",
          value:"COLHER"
        },
        {
          label:"Colher(es) de sopa",
          value:"COLHERDESOPA"
        },
        {
          label:"Nenhuma",
          value:"NENHUMA"
        },
      ],
      igredientes:[],
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
      this.load()
    },

    async load(){
      if(this.$route.params.id!=undefined){
        await this.findOne(this.$route.params.id)
      }
    },

    async findOne(id){
      // try{
        const resp = await this.$services.receitas.getById(id)
        // console.log(resp)
        if(resp && resp.data){
          this.receita = resp.data
          this.igredientes = this.receita.igredientes
          for(let igrediente of this.igredientes){
            let value = new String
            let label = new String
            value = igrediente.unidade
            label = this.covertUnidade(igrediente.unidade)
            igrediente.unidade = {
              label: label,
              value: value,
            }
          }
        }
      // }catch(error){
      //   console.log(error)
      // }
    },

    adicionarNovoIgrediente(){
      this.igredientes.push(
        {
          unidade: {label: 'Quantidade',value:'QUANTIDADE'},
          label: undefined,
          value: 0,
        }
      )
    },

    async removerIgrediente(igrediente){
      if(igrediente!=undefined){
        let index = undefined
        index = this.igredientes.indexOf(igrediente)
        if(igrediente.id!=undefined){
          const resp = await this.$services.igredientes.delete(igrediente.id)
          if(resp){
            if(index!=undefined) this.igredientes.splice(index,1)
          } 
        }else{
          if(index!=undefined) this.igredientes.splice(index,1)
        }
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
        this.receita.imagem = f
      };
      // console.log(this.receita)
      reader.readAsDataURL(file);
      },

    async salvar(){
      try{
        // let igredientesCopy = new Object(this.igredientes)
        this.receita.igredientes = this.igredientes
        for(let igrediente of this.receita.igredientes){
          igrediente.unidade = igrediente.unidade.value
        }
        var resp
        if(this.receita.id!=undefined){
          resp = await this.$services.receitas.put(this.receita.id,this.receita)
        }else{
          this.receita.usuarioId = this.$store.state.usuarioLogado.id
          resp = await this.$services.receitas.post(this.receita)
        }
        // console.log(resp)
        if(resp && resp.data || resp && resp.statusText=="No Content"){
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
>>> .v-select .vs__dropdown-toggle .vs__actions .vs__clear {
    display: none !important;
}
</style>