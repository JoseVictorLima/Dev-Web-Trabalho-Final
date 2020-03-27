<template>
    <div>
        <div class="dropdown">
            <button id="user-menu" class="dropbtn close" @click="openClose()">{{this.content}}</button>
            <div id="content" :disabled="this.show==false" class="dropdown-content-none">
                <div class="photo-container">
                    <img v-if="this.$store.state.usuarioLogado.imagem==undefined" src="../assets/img/image_not_found.png" height="100%" width="100%" class="circular-photo">
                    <img v-if="this.$store.state.usuarioLogado.imagem!=undefined" :src="`${this.$store.state.usuarioLogado.imagem}`" height="100%" width="100%" class="circular-photo">
                </div>
                <a href="#" class="text-center">Editar Perfil</a>
                <a href="#" class="text-center" @click="logof()">Sair</a>
            </div>
        </div>
    <!-- <div id="user-menu" class="container user-menu close col-12" @click="openClose()">
      <div class="photo-container">
        <img v-if="this.$store.state.usuarioLogado.imagem==undefined" src="../assets/img/image_not_found.png" height="100%" width="100%" class="circular-photo">
        <img v-if="this.$store.state.usuarioLogado.imagem!=undefined" :src="`${this.$store.state.usuarioLogado.imagem}`" height="100%" width="100%" class="circular-photo">
      </div>
    </div> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            content: "V",
            show: false
        };
    },
    methods:{
        openClose(){
            // console.log("Aqui")
            if(this.show==false) {
                document.getElementById('user-menu').classList.add('open')
                document.getElementById('user-menu').classList.remove('close')
                document.getElementById('content').classList.add('dropdown-content')
                document.getElementById('content').classList.remove('dropdown-content-none')
                this.content= "Perfil"
                // doc.styles.translateY('10px')
            }
            else if(this.show==true){
                document.getElementById('user-menu').classList.add('close')
                document.getElementById('user-menu').classList.remove('open')
                document.getElementById('content').classList.add('dropdown-content-none')
                document.getElementById('content').classList.remove('dropdown-content')
                this.content= "V"
                // doc.styles.translateY('-100px')
            }
            this.show = !this.show
        }
    }
}
</script>
<style scoped>
    /* .user-menu{
        float: right;
        position: fixed;
        max-width: 150px;
        z-index: 10;
    }
 */

.open{
    transform: translateY(0px);
}
.close{
    transform: translateY(-15px);
}

.dropbtn {
    max-width: 200px;
    min-width: 180px;
    background-color: rgb(241, 168, 72);
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
}

.dropdown {
    position: fixed;
    right: 3px;
    z-index: 10;
    display: inline-block;
}

.dropdown-content {
    display: block;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content-none{
    display: none;
}

.dropdown-content a {
    max-width: 200px;
    min-width: 180px;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content div {
    max-width: 200px;
    min-width: 180px;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

/* .dropdown-content div:hover {background-color: #ddd;} */

.dropdown-content a:hover {background-color: #ddd;}

/* .dropdown:hover .dropdown-content {display: block;} */

.dropdown:hover .dropbtn {background-color: rgb(216, 136, 32);}    
</style>