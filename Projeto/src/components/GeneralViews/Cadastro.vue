<template>

<div>

<Header></Header>

<div id="alogin">
    <b>CADASTRO</b>
</div>

<form id="form2">
  <div class="form-group row">

    <div class="col-sm-4">
      E-mail:
      <input type="email" class="form-control" id="email" placeholder="Digite seu email...">
    </div>

    <div class="col-sm-4">
      Senha:
      <input type="password" class="form-control" id="senha" placeholder="Digite sua senha...">
    </div>

    <div class="col-sm-4">
      Confirmar Senha
      <input type="password" class="form-control" id="senha" placeholder="Digite sua senha novamente...">
    </div>

  </div>
</form>

<div id="div1">
  <b-button variant="outline-primary">REGISTRAR</b-button>
</div>

<div id="div2">
    Já possui cadastro?
    <router-link v-bind:to="{path:'/login'}">
    Entrar
    </router-link>
</div>

</div>

</template>

<script>
import Header from '../Header/Header'

    export default{
        components: { Header }
}
</script>

<style>
#alogin {
    font-size: 150%;
    color: black;
    font-family: 'Arial'; 
    border-top: 150px solid;
    border-bottom: 50px solid;
    border-color: white;
    text-align: center;
}

#div1 {
    margin-top: 3%;
    text-align: center;
}

#div2 {
    margin-top: 1%;
    text-align: center;
}

#form2 {
    border-left: 100px solid;
    border-right: 100px solid;
    border-color: white;
}

</style>
