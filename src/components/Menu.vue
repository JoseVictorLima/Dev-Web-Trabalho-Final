<template>
    <div>
        <div class="menu-container row">
            <div class="col-12 row">
                <div class="col-2 flex-div">
                    <span class="hidden-link middler" @click="redirect('home')"><b>Home</b></span>
                </div>
                <div class="col-2 flex-div">
                    <span class="hidden-link middler" @click="redirect('sobre')"><b>Sobre</b></span>
                </div>
                <div class="col-2 flex-div">
                    <span class="hidden-link middler" @click="redirect('receitas')"><b>Receitas</b></span>
                </div>
                <div class="col-2 flex-div" v-if="this.$store.state.usuarioLogado.id!=undefined">
                    <span class="hidden-link middler" @click="redirect('receitas/new')"><b>Nova Receita</b></span>
                </div>
                <div class="col-2 flex-div" v-if="this.$store.state.usuarioLogado.id==undefined">
                    <span class="hidden-link middler" @click="redirect('usuario/new')"><b>Criar Conta</b></span>
                </div>
                <div class="col-2 flex-div" v-if="this.$store.state.usuarioLogado.id==undefined">
                    <span class="hidden-link middler" @click="redirect('login')"><b>Login</b></span>
                </div>
                <!-- <div class="col-2 flex-div" v-if="this.$store.state.usuarioLogado.id!=undefined">
                    <span class="hidden-link middler" @click="logof()"><b>Sair</b></span>
                </div> -->
            </div>
            <!-- <div v-if="this.$store.state.usuarioLogado.id!=undefined" class="col-12 row">
                <div class="col-12 image-div">
                    <div class="photo-container">
                        <img v-if="this.$store.state.usuarioLogado.imagem==undefined" src="../assets/img/image_not_found.png" height="100%" width="100%" class="circular-photo">
                        <img v-if="this.$store.state.usuarioLogado.imagem!=undefined" :src="`${this.$store.state.usuarioLogado.imagem}`" height="100%" width="100%" class="circular-photo">
                    </div>
                </div>
            </div> -->
        </div>    
    </div>
</template>
<script>
export default {
    data(){
        return{
            // img:'../assets/img/impmon_account_photo.png'
        };
    },
    methods:{
        // redirect(path){
        //     if(path=='home') this.$router.push('/')
        //     else this.$router.push(`/${path}`)
        // }
    }
}
</script>
<style>
.menu-container{
    border-radius: 10px; 
    display: flex;
    background-color: rgb(255, 195, 116);
    margin: 0% 1% 0% 1%;
    padding: 2%;
}

.flex-div{
    display: flex;
    align-items: center;
}

.image-div{
    display: flex;
    justify-content: flex-end;
}

.photo-container{
    max-width: 100px;
    max-height: 100px;
}
</style>