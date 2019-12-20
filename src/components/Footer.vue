<template>
    <div class="background-footer row">
        <div class="col-3">
            <div class="">
                <span>Mapa do Site</span>
                <br>
                <a href="#" @click="$router.push(`/`)">Home</a>
                <br>
                <a href="#" @click="$router.push(`/sobre`)">Sobre</a>
                <br>
                <a href="#" @click="$router.push(`/login`)">Login</a>
                <br>
                <!-- <a href="#">Opção 4</a> -->
                <!-- <br> -->
            </div>
        </div>
        <!--   -->
    </div>
</template>

<style>
.background-footer{
    color: rgb(244, 244, 244);
    background-color: rgb(43, 43, 43);
    margin: 0%;
    padding: 3% 1% 3% 3%;
}

.background-footer a{
    color:rgb(244, 244, 244);
}
</style>