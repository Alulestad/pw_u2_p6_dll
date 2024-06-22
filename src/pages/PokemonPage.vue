<template>
  <h1 v-if="!pokemonCorrecto">Por favor espere.......</h1>
  <div v-else>
    <h1>Selecciona el Pokemon correcto</h1>
    <PokemonImagen :idPokemon="pokemonCorrecto.id" :mostrarPokemon="mostrar" />
    <PokemonOpciones
      v-show="!ocultarOpciones"
      :pokemons="arreglo"
      @seleccionPokemon="revisarRespuesta($event)"
    />
    <h2 v-show="ocultarOpciones">
      Felicitaciones el pokemon es {{ pokemonCorrecto.nombre }}
    </h2>
    <h2 v-show="!ocultarOpciones && sigaIntentando">
      Pokemon incorrecto siga intentando
    </h2>
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
      const vectorInicial = await obtenerPokemonsFachada(7);
      this.arreglo = vectorInicial;

      const indice = Math.floor(Math.random() * 7);
      this.pokemonCorrecto = this.arreglo[indice];
    },
    revisarRespuesta(dato) {
      console.log("Se emitio un evento desde el hijo");
      console.log(dato);

      if (dato.ident === this.pokemonCorrecto.id) {
        this.mostrar = true;
        /* Ocultar las otras opciones, y presentar un mensaje que diga felicitaciones y el nombre del pokemon */
        this.ocultarOpciones = true;
      } else {
        console.log("ERRORrr.....");
        this.sigaIntentando = true;
      }
    },
  },
  data() {
    return {
      arreglo: [],
      pokemonCorrecto: null,
      /* llamar: this.cargaInicial(), Esto se puede hacer pero no se recomienda */
      mostrar: false,
      ocultarOpciones: false,
      sigaIntentando: false,
    };
  },
  mounted() {
    this.cargaInicial();
  } /* se dispara cuando se incia pa pagina web */,
};
</script>

<style scope></style>
