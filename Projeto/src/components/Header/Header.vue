<template> 
    <div>
        <b-navbar variant="dark" type="dark">
          <b-navbar-brand>
            <router-link v-bind:to="{path:'/'}"> 
              <img src="../../assets/logo2.png" id="img">
            </router-link>

            <router-link id="routerFinmap" v-bind:to="{path:'/'}"> 
              Financial Map
            </router-link>

          </b-navbar-brand>

          <b-navbar-brand class="ml-auto">
            <router-link id="h5" v-bind:to="{path:'/'}">
              <h5> Como Funciona </h5>
            </router-link>
          </b-navbar-brand>

          <b-nav-item-dropdown text="LOGIN" id="li1" right>
              <b-dropdown-item id="router3">
                <router-link id="router1" v-bind:to="{path:'/login'}"> 
                  Fazer Login
                </router-link>
              </b-dropdown-item>

              <b-dropdown-item>
                <router-link id="router2" v-bind:to="{path:'/cadastro'}"> 
                  Cadastrar-se
                </router-link>
              </b-dropdown-item>
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
    text-decoration: none;
    list-style: none;
  }

  #divnav {
    width: 100% !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #router1, #router2 {
    font-size: 100%;
    text-decoration: none;

  }

  #router1:hover, #router2:hover {
    color: green;
  }

  #h5 {
    color: white;
  }

  #h5:hover {
    text-decoration: none;
    color: green;
  }

  #routerFinmap {
    color: white;
    font-size: 100%;
    text-decoration: none;
  }

  #routerFinmap:hover {
    color: green;
  }

</style>