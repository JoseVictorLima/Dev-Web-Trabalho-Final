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
    }
}