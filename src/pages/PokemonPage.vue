<template>
  <h1 v-if="!pokemonCorrecto">Por favor espere.......</h1>
  <div v-else>
    <h1>Selecciona el Pokemon correcto</h1>
    <PokemonImagen :idPokemon="pokemonCorrecto.id" :mostrarPokemon="mostrar" />
    <PokemonOpciones :pokemons="arreglo" />
  </div>
  <!-- <div>{{ cargaInicial() }}</div> -->
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
      const vectorInicial = await obtenerPokemonsFachada(5);
      this.arreglo = vectorInicial;

      const indice = Math.floor(Math.random() * 7);
      this.pokemonCorrecto = this.arreglo[indice];
    },
  },
  data() {
    return {
      arreglo: [],
      pokemonCorrecto: null /* Esto se puede hacer pero no se recomienda */,
      /* llamar: this.cargaInicial(), */
      mostrar: false,
    };
  },
  mounted() {
    this.cargaInicial();
  } /* se dispara cuando se incia pa pagina web */,
};
</script>

<style scope></style>
