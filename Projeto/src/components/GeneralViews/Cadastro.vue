<template>

<div>

<Header></Header>

<div id="alogin">
    <b>CADASTRO</b>
</div>

<form id="form1">
  <div class="form-group row">

    <div class="col-sm-4">
      Nome:
      <input type="text" class="form-control" id="nome" placeholder="Digite seu nome..." required>
      <small id="ajudaNome" class="form-text text-muted">
        Ex: João
      </small>
    </div>

    <div class="col-sm-4">
      Sobrenome:
      <input type="text" class="form-control" id="sobrenome" placeholder="Digite seu sobrenome..." required>
      <small id="ajudaSobrenome" class="form-text text-muted">
        Ex: Da Silva
      </small>
    </div>

    <div class="col-sm-4">
      Confirmar Senha
      <input type="date" class="form-control" id="data">
    </div>

  </div>
</form>

<form id="form2">
  <div class="form-group row">

    <div class="col-sm-4">
      E-mail:
      <input type="email" class="form-control" id="email" placeholder="Digite seu email..." required>
      <small id="ajudaEmail" class="form-text text-muted">
        Ex: joao@gmail.com
      </small>
    </div>

    <div class="col-sm-4">
      Senha:
      <input type="password" class="form-control" id="senha" placeholder="Digite sua senha..." required>
      <small id="ajudaSenha" class="form-text text-muted">
        Sua senha deve conter uma letra maíuscula no mínimo.
      </small>
    </div>

    <div class="col-sm-4">
      Confirmar Senha
      <input type="password" class="form-control" id="senha" placeholder="Digite sua senha novamente..." required>
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

#form1, #form2 {
    border-left: 100px solid;
    border-right: 100px solid;
    border-bottom: 15px solid;
    border-color: white;
}

</style>
