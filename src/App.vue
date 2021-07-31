<template>

  <div id="app">
    <cabecalho/>
    <container/>
  </div>


</template>

<script>

import cabecalho from "./components/cabecalho.vue"
import container from "./views/container.vue"

export default {
  components:{ cabecalho, container}
}

</script>

<style>

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, hmtl{
    height: 100%;
  }

  body{
    background-color: #f5f5f5;
  }

  #app{
    height: 100%;
    min-height: 80vh
  }
  
</style>
