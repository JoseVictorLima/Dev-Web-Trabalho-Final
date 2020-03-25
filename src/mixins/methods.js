export default {
    methods:{
        async login(){
            const resp = await this.$services.auth.post(this.usuario)
            // console.log(resp)
            if(resp.data.token=='Invalid'){
              this.makeToast("Nome ou Senha invalido!",'error')
            }else{
              this.$store.commit('setUsuario',resp.data.usuario[0])
            //   console.log(this.usuarioLogado)
              this.$router.push('/')
            }
          },
        logof(){
            if(this.$store.state.usuarioLogado.id!=undefined){
              this.$store.commit('unSetUsuario')
              this.redirect('home')
            }
        },
        redirect(path){
            if(path=='back') this.$router.back().catch(err => {})
            if(path=='home') this.$router.push('/').catch(err => {})
            else this.$router.push(`/${path}`).catch(err => {})
        },
        makeToast(message,type,config=undefined){
            //Available Types:
            //default , info , success , error , warning
            if(message!=undefined){
                if(type=='default') this.$toast(`${message}`,config)
                else if(type=='info') this.$toast.info(`${message}`,config)
                else if(type=='success') this.$toast.success(`${message}`,config)
                else if(type=='error') this.$toast.error(`${message}`,config)
                else if(type=='warning') this.$toast.warning(`${message}`,config)
                else this.$toast(`${message}`,config)
            }
        },
        covertUnidadeExibition(unidade){
          let covertedUnidade = unidade
          if(unidade=='QUANTIDADE') covertedUnidade = ""
          else if(unidade=='QUILO') covertedUnidade = "kg(s)"
          else if(unidade=='GRAMA') covertedUnidade = "g(s)"
          else if(unidade=='XICARA') covertedUnidade = "xícara(s) de"
          else if(unidade=='XICARADECHA') covertedUnidade = "xícara(s) de chá de"
          else if(unidade=='COLHER') covertedUnidade = "colher(es) de"
          else if(unidade=='COLHERDESOPA') covertedUnidade = "colher(es) de sopa de"
          // console.log(covertedUnidade)
          return covertedUnidade
        },
        covertUnidade(unidade){
          let covertedUnidade = unidade
          if(unidade=='QUANTIDADE') covertedUnidade = "Quantidade"
          else if(unidade=='QUILO') covertedUnidade = "Quilo(s)"
          else if(unidade=='GRAMA') covertedUnidade = "Grama(s)"
          else if(unidade=='XICARA') covertedUnidade = "Xícara(s)"
          else if(unidade=='XICARADECHA') covertedUnidade = "Xícara(s) de chá"
          else if(unidade=='COLHER') covertedUnidade = "Colher(es)"
          else if(unidade=='COLHERDESOPA') covertedUnidade = "Colher(es) de sopa"
          else if(unidade=='NENHUMA') covertedUnidade = "Nenhuma"
          // console.log(covertedUnidade)
          return covertedUnidade
        }
    }
}