<template>
<div class="container">
            <div class="row  justify-content-md-center">
                <div class="col-6 a">
                    <h1>Configurações da Conta</h1>
                        <div class="media">
                            <img class="align-self-start mr-3" src="imgtest.jpg" alt="Imagem de exemplo genérica" width="64px" height="64px">
                            <div class="media-body"> 
                                E-mail
                                <form class="form-inline"> 
                                    <input class="form-control" id="disabledInput" type="text" placeholder="fulano@gmail" disabled> 
                                    <button class="btn btn-primary" type="submit">Mudar email</button>                                      </form>
                                </form>
                                Senha
                                <form class="form-inline"> 
                                    <input class="form-control" id="disabledInput" type="password" placeholder="*******" disabled> 
                                    <button class="btn btn-primary" type="submit">Mudar senha</button>                                      </form>
                                </form> 
                                <br>    
                                <button class="btn btn-primary" type="submit">Salvar</button>                                      </form>
       
                            </div>
                        </div>
                </div>                
            </div> 
        </div>  

</template>

 <style>
        body{
            background-color: chartreuse;
        }

        .a{
            background-color: cornflowerblue;
            
        }
</style>