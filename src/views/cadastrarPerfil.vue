<template>
<div class="about">
  <div class="container">
    <!-- <div class="row-12">
      <center><h3>Bem Vindo</h3></center>
      <br>
    </div> -->
    <!-- <div class="row-12" >
      <center>
        <button class="loginBtn loginBtn--facebook">
          Login com Facebook
        </button>
              
        <button class="loginBtn loginBtn--google">
          Login com Google
        </button>
      </center>
      <br>
      <br>
    </div>
    <div class="row">
      <div class="form-group col-md-4">
       <hr>
      </div>
      <div class="form-group col-md-4">
        <center>OU</center>
      </div>
      <div class="form-group col-md-4">
        <hr>  
      </div>
    </div> -->
    <div>
      <form class="row-12">
        <div class="row-12">
          <center><h4>Cadastro</h4></center>
          <br>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="nome">Nome</label>
            <input type="text" class="form-control" id="nome" placeholder="Nome">
          </div>
          <div class="form-group col-md-6">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Email">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="senha">Senha</label>
            <input type="password" class="form-control" id="senha" placeholder="Senha">
          </div>
          <div class="form-group col-md-6">
            <label for="confSenha">Confirmar Senha</label>
            <input type="password" class="form-control" id="confSenha" placeholder="Confirmar Senha">
          </div>
        </div>
                    
        <div class="form-row">
          <div class="form-group col-md-6">
            Data de Nascimeto
          </div>
          <div class="form-group col-md-6">
            Sexo
          </div>
          <!-- <div class="form-group col-md-6">
            Localização
          </div> -->
        </div>
                                    
      <div class="form-row">
        <div class="col-md-2 my-1">
          <!-- <select class="custom-select mr-sm-2" id="inlineFormCustomSelect"> -->
          <v-select :options="dias" v-model="dia"></v-select>
          <!-- <option selected>Dia</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select> -->
        </div>
        <div class="col-md-2 my-1">
          <v-select :options="meses" v-model="mes"></v-select>
          <!-- <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected>Mês</option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select> -->
        </div>
        <div class="col-md-2 my-1">
          <v-select :options="anos" v-model="ano"></v-select>
          <!-- <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected>Ano</option>
            <option value="1">2000</option>
            <option value="2">2001</option>
            <option value="3">2002</option>
            <option value="4">2003</option>
            <option value="5">2004</option>
            <option value="6">2005</option>
            <option value="7">2006</option>
            <option value="8">2007</option>
            <option value="9">2008</option>
            <option value="10">2009</option>
            <option value="11">2010</option>
            <option value="12">2011</option>
          </select> -->
        </div>
        <div class="col-md-6 my-1">
          <div class="form-row">
          <div class="form-group col-md-6">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Feminino">
              <label class="form-check-label" for="inlineRadio1">Feminino</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Masculino">
              <label class="form-check-label" for="inlineRadio2">Masculino</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Outro">
              <label class="form-check-label" for="inlineRadio3">Outro</label>
            </div>
          </div>
        </div>
        </div>
        <!-- <div class="col-md-6 my-1">
          <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected>País</option>
            <option value="1">Brasil</option>
          </select>
        </div> -->
      </div>
      <br>
      <!-- <div class="form-row"> -->
        <!-- <div class="form-group col-md-6">
          Sexo
        </div> -->
      <!-- </div> -->
      <!-- <div class="form-row">
        <div class="form-group col-md-6">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="opcao1">
            <label class="form-check-label" for="inlineRadio1">Feminino</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="opcao2">
            <label class="form-check-label" for="inlineRadio2">Masculino</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="opcao3">
            <label class="form-check-label" for="inlineRadio3">Outro</label>
          </div>
        </div>
      </div> -->

      <div class="form-check col-md-12">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
          Eu aceito os Termos de Uso e Política de Privacidade do *********.
        </label>
        </div>
      <br>
      <button type="button" class="btn btn-primary" @click="Cadastrar()">Cadastrar</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      dia:{label:1,value:1},
      dias:[],
      mes:{label:"Janeiro",value:1},
      meses:[
        {label:"Janeiro",value:1},
        {label:"Fevereiro",value:2},
        {label:"Março",value:3},
        {label:"Abri",value:4},
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

    load(){
      this.getDays()
      this.generateYears(1950,2050)
    },

    getDays(){
      let max = 28
      if(this.mes.value == 1 || this.mes.value == 3 || this.mes.value == 5 || this.mes.value == 7 || this.mes.value == 8 || this.mes.value == 10 || this.mes.value == 12) max = 31
      else if(this.mes.value == 4 || this.mes.value == 6 || this.mes.value == 9 || this.mes.value == 11) max = 30
      let newArray = []
      for(let i = 1;i<=max;i++){
        this.dias.push({ label:i ,value:i })
      }
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
</style>
        