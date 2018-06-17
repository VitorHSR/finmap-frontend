<template>

<div>
<Header></Header>

<div id="conteudo">
        <b-media right-align vertical-align="center">
            <b-img slot="aside" blank blank-color="#ccc" width="300" alt="Item 1" />
            <h5 class="mt-0 mb-1">Item 1</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
            turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
            congue felis in faucibus.
        </b-media>
        <b-media left-align vertical-align="center">
              <b-img slot="aside" blank blank-color="#ccc" width="300" alt="Item 2" />
              <h5 class="mt-0 mb-1">Item 2</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
              sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
              turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
              congue felis in faucibus.
        </b-media>
        <b-media right-align vertical-align="center">
                <b-img slot="aside" blank blank-color="#ccc" width="300" alt="Item 3" />
                <h5 class="mt-0 mb-1">Item 3</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
        </b-media>
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
    #conteudo {
        border-left: 100px solid;
        border-right: 100px solid;
        border-top: 25px solid;
        border-color: white;
    }
</style>