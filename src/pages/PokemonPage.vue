<template>
  <h1>Selecciona el Pokemon correcto</h1>
  <PokemonImagen :idPokemon="5" :mostrarPokemon="true" />
  <PokemonOpciones />
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";

export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  data() {
    return {};
  },
};
</script>

<style scope></style>
