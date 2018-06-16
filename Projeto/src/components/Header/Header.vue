<template> 
    <div>
        <b-navbar variant="dark" type="dark">
          <b-navbar-brand href="#">
            <img src="../../assets/logo2.png" class="d-inline-block align-top" alt="FINMAP" id="img">
            Financial Map
          </b-navbar-brand>

          <b-navbar-brand href="#"> 
            Como Funciona 
          </b-navbar-brand>
              
          <b-nav-item-dropdown text="Login" id="li1" right>
              <b-dropdown-item href="#">Fazer Login</b-dropdown-item>
              <b-dropdown-item href="#">Cadastrar-se</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar>
    </div>
</template>

<script> 
    export default{

}   
</script>

<style>
  #img {
    max-width: 80px;
  }

  #li1 {
    list-style: none;
  }

</style>