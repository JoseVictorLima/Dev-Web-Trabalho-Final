<template>
  <div class="about">
    <div class="container">
      <ValidationObserver v-slot="{ handleSubmit}">
      <form class="row" @submit.prevent="handleSubmit(salvar)">
        <div class="form-group col-12">
          <validation-provider  rules="required" v-slot="{ errors }">
            <label for="nome">Nome*</label>
            <input type="text" class="form-control" id="nome" placeholder="Nome da receita" v-model="receita.nome">
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="form-group col-12">
          <label for="imagem">Imagem</label>
          <input :disabled="isLoading" type="file" class="form-control-file" id="imagem" @change="fileSelected">
        </div>
        <div class="form-group col-6">
          <validation-provider  rules="required" v-slot="{ errors }">
            <label for="receitaTempo">Tempo de Preparo*</label>
            <input type="time" class="form-control" id="receitaTempo" placeholder="Tempo de preparo" v-model="receita.tempo" min="00:00">
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
          <br>
          <validation-provider  rules="min_value:0" v-slot="{ errors }">
            <label for="receitaRendimento">Porções*</label>
            <input type="number" class="form-control" id="receitaRendimento" placeholder="Rendimento" v-model="receita.rendimento">
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="form-group col-12">
          <label style="margin-right: 1% !important;" for="receitaAdd">Ingredientes</label>
          <button :disabled="isLoading" class="btn btn-success" @click="adicionarNovoIgrediente()" type="button" >+</button>
          <div class="col-12" id=receitaAdd v-for="(igrediente,index) of igredientes" :key="index">
            <br>
            <hr>
            <div class="col-12 row">
              <div class="col-3" v-if="igrediente.unidade.value!='NENHUMA'">
                <validation-provider  rules="min_value:0" v-slot="{ errors }">
                  <label :for="`label${index}`">Valor: </label>
                  <br>
                  <input type="number" :id="`label${index}`" :name="`label${index}`" v-model="igrediente.value">
                  <span class="error">
                      <br>
                      {{ errors[0] }}
                  </span>
                </validation-provider>
              </div>
              <div class="col-3">
                <label :for="`label${index}`">Unidade: </label>
                <br>
                <v-select v-if="isLoading==false" :options="unidadesMedida" v-model="igrediente.unidade"></v-select>
              </div>
              <div class="col-3">
                <validation-provider  rules="required" v-slot="{ errors }">
                  <label :for="`label${index}`">Nome*: </label>
                  <br>
                  <input type="text" :id="`label${index}`" :name="`label${index}`" placeholder="Cenoura" v-model="igrediente.label">
                  <span class="error">
                    <br>
                    {{ errors[0] }}
                  </span>
                </validation-provider>
              </div>
              <div class="col-1">
                <button :disabled="isLoading" @click="removerIgrediente(igrediente)" class="btn btn-danger" type="button">Remover</button>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group col-12">
          <validation-provider  rules="required" v-slot="{ errors }">
            <label for="exampleFormControlTextarea1">Preparo*</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" v-model="receita.preparo"></textarea>
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="col-12">
          <font size="2px">*Campos obrigatorios</font>
          <br>
          <br>
          <button :disabled="isLoading" type="submit" class="btn btn-primary">Salvar</button>
          <button :disabled="isLoading" type="button" class="btn btn-secondary" @click="redirect('back')">Cancelar</button>
        </div>
      </form>
      </ValidationObserver>
    </div>
    <br>
  </div>
</template>
<script>
// import vSelect from "vue-select";

export default {
//   components:{
//     vSelect,
//   },
  data(){
    return{
      isLoading: false,
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
        rendimento: 0,
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
      this.carregando()
      // console.log("Aqui")
      // this.$router.go()
      this.receita = {
        rendimento: 0,
        igredientes:[],
        preparo:undefined,
      }
      if(this.$route.params.id!=undefined){
        await this.findOne(this.$route.params.id)
      }
      this.notcarregando()
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
      this.isLoading = true
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
      this.isLoading = false
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
        this.isLoading = true
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
          this.isLoading = false
        }
      }catch(error){
        // console.log(error)
        this.isLoading = false
        this.makeToast("Não foi possivel salvar! Tente outra vez mais tarde!",'error')
      }
    }
  },
}
</script>
<style scoped>
.error{
  color: red;
}
>>> .v-select .vs__dropdown-toggle .vs__actions .vs__clear {
    display: none !important;
}
</style>