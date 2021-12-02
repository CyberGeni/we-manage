<template>
  <div id="app"> 
    <app-header></app-header>  
    <router-view></router-view>    
  </div>
</template>

<script>
// import Header from './components/header.vue'
import Header from './assets/components/AppHeader.vue'

export default {
  components: {
    'app-header': Header,
    //'app-header': Shop
    },
  data () {
    return {

    }
  }
}
</script>
</script>

<style scoped>
  body {
    font-family: 'Jost', 'Segoe UI';
  }
</style>