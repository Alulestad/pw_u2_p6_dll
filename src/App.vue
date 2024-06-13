<template>
  <Pregunta />
  <Contador v-bind:num="11 + 1" v-if="false" />

  <div class="puchamones" v-if="false">
    <h1>PK</h1>

    <div class="puntajes">
      <label> puntaje: {{ puntaje }}</label>
      <label> Intento: {{ interno }}</label>
    </div>
    <div class="opcionesPokemones">
      <Pk
        v-for="(imagen, indice) in imagenes"
        :key="indice"
        :imagen="imagen"
        :nombre="respuesta[indice]"
      />
    </div>
    <div class="bottonJugar">
      <button @click="consumirAPI">Jugar</button>
    </div>
  </div>
</template>

<script>
import Contador from "./components/Contador.vue"; /* [1] */
import Pregunta from "./components/Pregunta.vue";
import Pk from "./components/Pk.vue";

export default {
  name: "App",
  components: {
    Pregunta /* [2] */,
    Contador,
    Pk,
  },
  methods: {
    calcularValor() {
      return 10 + 2;
    },
    async consumirAPI() {
      this.intento++;

      const imagenesApi = [];
      const nombresApi = [];

      for (let i = 0; i < this.imagenes.length; i++) {
        const { answer, image } = await fetch("https://yesno.wtf/api").then(
          (r) => r.json()
        );
        imagenesApi.push(image);
        nombresApi.push(answer);
      }

      this.imagenes = imagenesApi;
      this.respuesta = nombresApi;

      let numeroYes = 0;

      for (let i = 0; i < this.respuesta.length; i++) {
        if (this.respuesta[i] === "yes") {
          numeroYes++;
        }
      }
      if (numeroYes === 3) {
        this.puntaje = this.puntaje + 5;
      } else if (numeroYes === 2) {
        this.puntaje = this.puntaje + 2;
      } else if (numeroYes === 1) {
        this.puntaje = this.puntaje + 1;
      } else {
        this.puntaje = this.puntaje;
      }

      if (this.intento >= this.maxIntentos || this.puntaje >= 10) {
        this.juegoTerminado = true;
        this.juego = false;
      }
    },
  },
  data() {
    return {
      puntaje: 0,
      intento: 0,
      respuesta: [],
      imagenes: [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      ],
      maxIntentos: 6,
      juegoTerminado: false,
      juego: true,
    };
  },
};
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
