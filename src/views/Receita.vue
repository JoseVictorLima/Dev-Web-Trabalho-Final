<template>
  <div class="about">
    <br>
    <Menu></Menu>
    <br>
    <div class="container text-center row recipe-container">
      <br>
      <br>
      <div class="col-12 ">
        <h1>{{receita.nome}}</h1>
      </div>
      <br>
      <div class="col-12 row text-left">
        <div class="col-4 recipe-image">
          <br>
          <br>
          <img :src="receita.img" class="" alt="" height="100%" width="100%">
          <br>
          <br>
          <div class="row">
            <div class="preparo-title col-6">
              <img src="../assets/img/iconfinder_time_clock.png" alt="../assets/img/iconfinder_time_clock.png" height="30px" width="30px">
              : {{receita.tempo}}
            </div>
            <div class="preparo-title col-6">
              <img src="../assets/img/iconfinder_food.png" alt="../assets/img/iconfinder_food.png" height="30px" width="30px">
              : {{receita.rendimento}}
            </div>
            <br>
            <br>
            <div class="col-12">
              <div class="col-12 text-center preparo-title">Ingredientes</div>
              <div v-for="(igrediente,index) of this.receita.ingredientes" :key="index" class="col-12">
                <li>{{igrediente.value}} {{igrediente.label}}</li>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8">
          <br>
          <h4 class="text-center">Modo de Preparo</h4>
          <fieldset class="recipe-text">
            <div v-for="(preparo,index) of this.receita.preparo" :key="index">
              <h5 v-if="preparo.type=='title'" class="preparo-title">{{preparo.label}}</h5>
              <p v-if="preparo.type=='text'">{{preparo.label}}</p>
            </div>
          </fieldset>
        </div>
        <br>
      </div>
      <!-- <p>Um sistema de compartilhamento de receitas, parecido com o TudoGostoso.</p> -->
      <!-- <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a ab laborum libero ut soluta, dicta neque aut illum harum blanditiis provident deserunt minus. Sit, iste molestias. Doloremque, maiores error?</P> -->
      <!-- <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis aut veritatis dicta cumque voluptas officia sed, ad optio cum quisquam delectus ut culpa! Tempore error in ut nobis unde exercitationem.</P> -->
      <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fuga enim eveniet officiis magnam nemo exercitationem ipsum illo. Impedit necessitatibus vel reiciendis inventore nulla illum eos corrupti a neque iusto.</p> -->
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
      this.receita = this.generateStaticRecipe(id)
    },


    generateStaticRecipe(id){
        let recipe
        if(id=="1"){
            recipe = {
                nome: "Pudim de Leite",
                img: require('../assets/img/pudim_leite.jpg'),
                ingredientes:[
                    {label:"Xícara (chá) de açúcar",value:1},
                    {label:"Leite moça (lata ou caixinha)",value:1},
                    {label:"Medidas (da lata) de Leite Líquido Ninho",value:2},
                    {label:"Ovos",value:3},
                ],
                preparo:[
                    {type:"title" ,label:"Calda:"},
                    {type:"text" ,label:"Em uma panela de fundo largo, derreta o açúcar até ficar dourado."},
                    {type:"text" ,label:"Junte meia xícara (chá) de água quente e mexa com uma colher."},
                    {type:"text" ,label:"Deixe ferver até dissolver os torrões de açúcar e a calda engrossar."},
                    {type:"text" ,label:"Forre com a calda uma forma com furo central (19 cm de diâmetro) e reserve."},
                    {type:"title" ,label:"Pudim:"},
                    {type:"text" ,label:"Em um liquidificador, bata todos os ingredientes do pudim e despeje na forma reservada."},
                    {type:"text" ,label:"Cubra com papel-alumínio e leve ao forno médio (180°C), em banho-maria, por cerca de 1 hora e 30 minutos."},
                    {type:"text" ,label:"Depois de frio, leve para gelar por cerca de 6 horas. Desenforme e sirva a seguir."},
                ],
                rendimento: "16 Porções",
                tempo: "08:00",
            }
          }
          if(id=="2"){
            recipe = {
                nome: "Lasanha à Bolonhesa",
                img: require('../assets/img/lasanha_bolonhesa.jpg'),
                ingredientes:[
                    {label:"Quilo de massa para lasanha",value:"Meio"},
                    {label:"Colheres (sopa) de óleo",value:2},
                    {label:"Quilo de carne moída",value:"Meio"},
                    {label:"Cebola pequena picada",value:1},
                    {label:"Cenoura pequena ralada no ralo fino",value:1},
                    {label:"Xícara (chá) de salsão picado",value:"Meia"},
                    {label:"Lata de polpa de tomate",value:1},
                    {label:"Tabletes de MAGGI Caldo Carne",value:2},
                    {label:"Colheres (sopa) de manteiga",value:2},
                    {label:"Colheres (sopa) de farinha de trigo",value:"2 e meia"},
                    {label:"Meio litro de Leite Líquido NINHO",value:3},
                    {label:"Meio quilo de carne moída",value:2},
                    {label:"Pitada de noz-moscada",value:2},
                    {label:"Colher (chá) de sal",value:2},
                    {label:"Pitada de pimenta-do-reino",value:2},
                    {label:"Caixinha de NESTLÉ Creme de Leite",value:2},
                    {label:"g de queijo mozarela fatiado",value:2},
                    {label:"Colheres (sopa) de queijo parmesão ralado",value:2},
                ],
                preparo:[
                    {type:"title" ,label:"Lasanha:"},
                    {type:"text" ,label:"Cozinhe a massa de acordo com as instruções da embalagem e coloque em um recipiente com água fria até o momento de montar."},
                    {type:"title" ,label:"Molho Bolonhesa:"},
                    {type:"text" ,label:"Em uma panela, aqueça o óleo e refogue a carne."},
                    {type:"text" ,label:"Junte a cebola, a cenoura, o salsão e deixe refogar até murchar."},
                    {type:"text" ,label:"Acrescente a polpa de tomate e o tablete de MAGGI Caldo, dissolvido em 1 xícara (chá) de água quente. Deixe cozinhar por cerca de 10 minutos, ou até apurar o molho. Reserve."},
                    {type:"title" ,label:"Molho Branco:"},
                    {type:"text" ,label:"Em uma panela, derreta a manteiga, junte a farinha de trigo e deixe dourar. Aos poucos junte o Leite NINHO, mexendo sempre para não formar grumos."},
                    {type:"text" ,label:"Acrescente a noz moscada, o sal, e a pimenta-do-reino."},
                    {type:"text" ,label:"Quando adquirir consistência cremosa, retire do fogo, acrescente o NESTLÉ Creme de Leite, misture bem e reserve."},
                    {type:"title" ,label:"Montagem:"},
                    {type:"text" ,label:"Em um recipiente refratário (20 x 30 cm), coloque uma porção de molho bolonhesa; cubra com uma camada de massa, e uma porção de molho branco e coloque o queijo mozarela. Repita as camadas até a borda do recipiente."},
                    {type:"text" ,label:"Finalize com o queijo parmesão ralado e leve ao forno alto (220°C), preaquecido, por cerca de 20 minutos ou até dourar. Sirva."},
                ],
                rendimento: "12 Porções",
                tempo: "01:30",
            }
          }
          if(id=="3"){
            recipe = {
                nome: "Cachorro Quente",
                img: require('../assets/img/cachorro_quente.jpg'),
                ingredientes:[
                    {label:"g de salsicha",value:300},
                    {label:"Cebola",value:1},
                    {label:"Tomate",value:1},
                    {label:"Colher de manteiga",value:1},
                    {label:"Copo de extrato de tomate",value:1},
                    {label:"Caixa de creme de leite",value:1},
                    {label:"Medida do copo de extrato de tomate de água",value:"Meia"},
                ],
                preparo:[
                    {type:"text" ,label:"Pique a cebola e o tomate, refogue bem na manteiga."},
                    {type:"text" ,label:"Acrescente o extrato de tomate, corte a salsicha em rodelas e deixe cozinhar a gosto, se presiso acrescente a medida de água."},
                    {type:"text" ,label:"Depois de cozinhar bem acrescente o creme de leite."},
                    {type:"text" ,label:"Acrescente batata palha, milho verde, catchup e maionese."},
                    {type:"text" ,label:"E é so servir."},
                ],
                rendimento: "10 Porções",
                tempo: "00:30",
            }
          }
        return recipe
    }
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