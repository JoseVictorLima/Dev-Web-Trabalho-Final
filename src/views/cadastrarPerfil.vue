<template>
<div class="about">
  <div class="container">
    <div>
      <ValidationObserver v-slot="{ handleSubmit}">
      <form class="row-12" @submit.prevent="handleSubmit(salvar)">
        <div class="row-12">
          <center><h4>Cadastro</h4></center>
          <br>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <validation-provider  rules="required" v-slot="{ errors }">
              <label for="nome">Nome*</label>
              <input type="text" class="form-control" id="nome" placeholder="Nome" v-model="usuario.nome">
              <span class="error">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group col-md-6">
            <validation-provider  rules="required" v-slot="{ errors }">
              <label for="email">Email*</label>
              <input type="email" class="form-control" id="email" placeholder="Email" v-model="usuario.email">
              <span class="error">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <validation-provider  rules="required" v-slot="{ errors }">
              <label for="senha">Senha*</label>
              <input type="password" class="form-control" id="senha" placeholder="Senha" v-model="usuario.senha">
              <span class="error">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group col-md-6">
            <validation-provider  rules="required" v-slot="{ errors }">
              <label for="confSenha">Confirmar Senha*</label>
              <input type="password" class="form-control" id="confSenha" placeholder="Confirmar Senha" v-model="confirmSenha">
              <span class="error">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>
                    
        <div class="form-row">
          <div class="form-group col-md-6">
            Data de Nascimeto
          </div>
          <div class="form-group col-md-6">
            Sexo*
          </div>
          <!-- <div class="form-group col-md-6">
            Localização
          </div> -->
        </div>
                                    
      <div class="form-row">
        <div class="col-md-2 my-1">
          <!-- <select class="custom-select mr-sm-2" id="inlineFormCustomSelect"> -->
          <v-select :options="dias" v-model="dia"></v-select>
        </div>
        <div class="col-md-2 my-1">
          <v-select :options="meses" v-model="mes"></v-select>
        </div>
        <div class="col-md-2 my-1">
          <v-select :options="anos" v-model="ano"></v-select>
        </div>
        <div class="col-md-6 my-1">
          <div class="form-row">
          <div class="form-group col-md-6">
            <validation-provider  rules="required" v-slot="{ errors }">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="feminino" v-model="usuario.sexo">
                <label class="form-check-label" for="inlineRadio1">Feminino</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="masculino" v-model="usuario.sexo">
                <label class="form-check-label" for="inlineRadio2">Masculino</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="outro" v-model="usuario.sexo">
                <label class="form-check-label" for="inlineRadio3">Outro</label>
              </div>
              <span class="error col-4">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>
        </div>
        <div v-if="usuario.id!=undefined" class="form-group col-4">
          <label for="imagem">Imagem</label>
          <input :disabled="isLoading" type="file" class="form-control-file" id="imagem" @change="fileSelected" @mouseover="showImage()" @mouseout="hiddenImage()">
        </div>
        <div class="col-12">
          <div class=" col-2">
            <img v-if="usuario.imagem==undefined" src="../assets/img/image_not_found.png" height="100%" width="100%" class="circular-photo hidden">
            <img v-if="usuario.imagem!=undefined" :src="`${usuario.imagem}`" height="100%" width="100%" class="circular-photo hidden">
          </div>
        </div>
      </div>
      <br>
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
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      isLoading: false,
      confirmSenha:undefined,
      usuario:{},
      dia:{label:1,value:1},
      dias:[],
      mes:{label:"Janeiro",value:1},
      meses:[
        {label:"Janeiro",value:1},
        {label:"Fevereiro",value:2},
        {label:"Março",value:3},
        {label:"Abril",value:4},
        {label:"Maio",value:5},
        {label:"Junho",value:6},
        {label:"Julho",value:7},
        {label:"Agosto",value:8},
        {label:"Setembro",value:9},
        {label:"Outubro",value:10},
        {label:"Novembro",value:11},
        {label:"Dezembro",value:12},
      ],
      ano:{label:"2000", value:2000},
      anos:[]
    }
  },

  watch:{
    mes(){
      this.getDays()
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
      this.getDays()
      this.generateYears(1900,2050)
      if(this.$route.params.id!=undefined && this.$route.params.id==this.$store.state.usuarioLogado.id){
        await this.findOne(this.$route.params.id)
      }
      this.notcarregando()
    },

    async salvar(){
      try{
        this.isLoading = true
        if(this.usuario.senha!=this.confirmSenha){
          this.makeToast("O campo Confirmar Senha deve ser igual ao campo Senha!",'error')
          this.isLoading = false
          return
        }
        this.usuario.dataNascimento = new Date(this.ano.value,(this.mes.value-1),this.dia.value)
        var resp
        if(this.usuario.id!=undefined){
          resp = await this.$services.usuarios.put(this.usuario.id,this.usuario)
        }else{
          resp = await this.$services.usuarios.post(this.usuario)
        }
        if(resp && resp.data || resp && resp.statusText=="No Content"){
          this.makeToast("Usuario salvo com sucesso!",'success')
          if(this.$store.state.usuarioLogado.id) this.login()
          else this.$router.push('/')
          this.isLoading = false
        }
      }catch(error){
        this.isLoading = false
        this.makeToast("Não foi possivel salvar! Tente outra vez mais tarde!",'error')
      }
    },

    async findOne(id){
      const resp = await this.$services.usuarios.getById(id)
      if(resp && resp.data){
        this.usuario = resp.data
        this.usuario.dataNascimento = new Date(this.usuario.dataNascimento)
        try{
          this.dia = {
            label:`${this.usuario.dataNascimento.getDate()}`,
            value:`${this.usuario.dataNascimento.getDate()}`
          }
          this.mes = this.convertMonth(this.usuario.dataNascimento.getMonth()+1),
          this.ano = {
            label:`${this.usuario.dataNascimento.getFullYear()}`,
            value:`${this.usuario.dataNascimento.getFullYear()}`
          }
        }catch(error){
          // console.log(error)
        }
        this.confirmSenha = this.usuario.senha
      }
    },

    getDays(){
      let max = 28
      if(this.mes.value == 1 || this.mes.value == 3 || this.mes.value == 5 || this.mes.value == 7 || this.mes.value == 8 || this.mes.value == 10 || this.mes.value == 12) max = 31
      else if(this.mes.value == 4 || this.mes.value == 6 || this.mes.value == 9 || this.mes.value == 11) max = 30
      this.dias = []
      if(max<this.dia.value) {
        this.dia.value = max
        this.dia.label = `${max}`
      }
      for(let i = 1;i<=max;i++){
        this.dias.push({ label:i ,value:i })
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
      let reader = new FileReader();
      reader.onload = e => {
        let f = e.target.result
        this.usuario.imagem = f
      };
      reader.readAsDataURL(file);
      },

    showImage(){
      let images = document.getElementsByClassName("hidden")
      images[0].style.visibility = 'visible'
    },

    hiddenImage(){
      let images = document.getElementsByClassName("hidden")
      images[0].style.visibility = 'hidden'
    },

    convertMonth(monthNum){
        if(monthNum==1) return {label:"Janeiro",value:1}
        else if(monthNum==2) return {label:"Fevereiro",value:2}
        else if(monthNum==3) return {label:"Março",value:3}
        else if(monthNum==4) return {label:"Abril",value:4}
        else if(monthNum==5) return {label:"Maio",value:5}
        else if(monthNum==6) return {label:"Junho",value:6}
        else if(monthNum==7) return {label:"Julho",value:7}
        else if(monthNum==8) return {label:"Agosto",value:8}
        else if(monthNum==9) return {label:"Setembro",value:9}
        else if(monthNum==10) return {label:"Outubro",value:10}
        else if(monthNum==11) return {label:"Novembro",value:11}
        else if(monthNum==12) return {label:"Dezembro",value:12}
    },

    generateYears(min,max){
      for(let i = min;i<=max;i++){
        this.anos.push({ label:i ,value:i })
      }
    },
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

/* Shared */
.loginBtn {
  box-sizing: border-box;
  position: relative;
  /* width: 13em;  - apply for fixed size */
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #FFF;
}
.loginBtn:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 100%;
}
.loginBtn:focus {
  outline: none;
}
.loginBtn:active {
  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
}
  /* Facebook */
.loginBtn--facebook {
  background-color: #4C69BA;
  background-image: linear-gradient(#4C69BA, #3B55A0);
  /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
  text-shadow: 0 -1px 0 #354C8C;
}
.loginBtn--facebook:before {
  border-right: #364e92 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
}
.loginBtn--facebook:hover,
.loginBtn--facebook:focus {
  background-color: #5B7BD5;
  background-image: linear-gradient(#5B7BD5, #4864B1);
}


/* Google */
.loginBtn--google {
  /*font-family: "Roboto", Roboto, arial, sans-serif;*/
  background: #DD4B39;
}
.loginBtn--google:before {
  border-right: #BB3F30 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
}
.loginBtn--google:hover,
.loginBtn--google:focus {
  background: #E74B37;
}
.hidden{
  visibility: hidden;
}
</style>
        