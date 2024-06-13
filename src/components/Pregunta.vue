<template>
  <img v-if="img" v-bind:src="img" alt="No se puedo" />

  <div class="oscuro"></div>

  <div class="pregunta-container">
    <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
    <p>Recuerda terminar la pregunta con el signo de interrogacion (?)</p>

    <div class="respuesta">
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      img: null,
    };
  },
  watch: {
    pregunta(value, oldValue) {
      console.log({ value }, { oldValue });
      if (!value.includes("?")) {
        return;
        /* Si no incluye salgase */
      }
      //consumir el API para obtener la respuesta

      this.obtenerRespuesta();
    },
  },
  methods: {
    async obtenerRespuesta() {
      this.respuesta = "pensando......";
      const data = await fetch("https://yesno.wtf/api").then((resp) =>
        resp.json()
      );
      /* resp es un nombre cualquiera, fetch es por defecto asincrono */
      console.log(data);
      const { answer, forced, image } = data;
      console.log(answer);
      this.respuesta = answer;
      this.img = image;
      return data;
    },

    async prueba() {
      const data2 = await this.obtenerRespuesta();
    },
  },
};
</script>

<style>
img,
.oscuro {
  max-height: 50%;
  height: 100vh;
  max-width: 50%;
  width: 100vw;
  position: fixed;

  top: 290px;
  left: 400px;
}
.oscuro {
  background: rgba(0, 0, 0, 0.2);
  /* 0.0 full transparente,1.0 full opaco */
}
.pregunta-container {
  position: relative; /*independientemente de los elementos que estén, este se pone primero*/
}

input {
  margin-top: 50px;
  width: 260px;
  padding: 20px 15px;
  border-radius: 15px;
}
input:focus {
  outline: none; /* la diferencia es que cada vez que me posicionava 
  en el input se marcava con lineas blancas 
  Hora no existe ese enmarcado*/

  /* text-align: center;
  contain: center;*/
}

p,
h1,
h2 {
  color: white;
}

p {
  font-size: 25px;
  margin-top: 0px;
}

.respuesta {
  margin-top: 70px;
}
</style>
