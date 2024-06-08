<template>
  <Contador />
</template>

<script>

import Contador from "./components/Pregunta.vue" /* [1] */


export default {
  name: 'App',
  components: {
    Contador /* [2] */
  },
  methods: {
    calcularValor() {
      return 10 + 2;

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>