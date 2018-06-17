<template>

<div>

<Header></Header>

<div id="alogin">
    <b>CADASTRO</b>
</div>


<div id="div1">
    E-mail:
    <b-form-input type="email" placeholder="Digite seu E-mail..."></b-form-input>
</div>

<div id="div2">
    Senha: 
    <b-form-input type="password" placeholder="Digite sua Senha..."></b-form-input>   
</div>

<div id="div3">
  <b-button variant="outline-primary">REGISTRAR</b-button>
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

#div1, #div2 {
    width: 30%;
    margin-left: 35%;
    margin-bottom: 1.5%;
}

#div3 {
    margin-top: 3%;
    margin-left: 47.5%;
}
</style>
