<template>
  <h1>Selecciona el Pokemon correcto</h1>
  <PokemonImagen :idPokemon="5" :mostrarPokemon="true" />
  <PokemonOpciones :pokemons="arreglo" />
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";
import obtenerPokemonsFachada from "../clientes/ClientePokemonAPI"; /* Solo para funciones */

export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  methods: {
    async cargaInicial() {
      const vectorInicial = await obtenerPokemonsFachada(4);
      this.arreglo = vectorInicial;
    },
  },
  data() {
    return {
      arreglo: [],
    };
  },
  mounted() {
    this.cargaInicial();
  } /* se dispara cuando se incia pa pagina web */,
};
</script>

<style scope></style>
