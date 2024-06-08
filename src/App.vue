<template>

  <img src="./assets/logo.png" alt="NONE">
  <Contador titulo="Estudiante" num="-1" /> <!-- [3] -->
  <Contador titulo="Profesor" />
  <!-- <Contador v-bin:num="10 + 1" /> -->
  <!-- <Contador v-bin:num="calcularValor()" /> -->
  <Contador :num="calcularValor()" /> <!-- Abreviatura del vbin -->
</template>

<script>

import Contador from "./components/Contador.vue" /* [1] */


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