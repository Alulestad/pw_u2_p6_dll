console.log(Vue); /* este objeto tiene todas las funcionalidades de vue */

const estudiantes = [
  {
    nombre: "Juan",
    apellido: "Gutierres",
  },
  {
    nombre: "Pedro",
    apellido: "Pérez",
  },
  {
    nombre: "Maria",
    apellido: "García",
  },
  {
    nombre: "Ana",
    apellido: "Rodríguez",
  },
  {
    nombre: "Luis",
    apellido: "López",
  },
]; /* es un arreglo */

/* crea la aplicacion */
const app = Vue.createApp({
  /* vue trabaja a travez de opciones con funcionalidades definidas: options api*/
  /* options api: son conjunto de opciones 
    que tienen una funcionalidad determinada 
    o una funcionalidad específica.   se usan back tics  ` `*/
  /* template: `
    <h1>Hola mundo desde Vue.js </h1>
    <p>{{1+1}}</p>
    <p>{{[1,2,3,4,5]}}</p> 
    <p>{{false?'Verdadero':'Falso'}}</p>
    ` */
  /* {{}}: programacion declarativa. Se pone adentro el codigo JS */

  /* PROPIEDAD REACTIVA:  */
  data() {
    /* data  es una option api */
    return {
      mensaje: "hola mundo propiedad reactiva",
      valor: 7,
      lista: estudiantes /* mi propiedad reactica
      es lista */,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    /* methods es una option api */
    cambiarTexto() {
      /* Toda propiedad reactiva que se usa en 
        codigo JS usa el "this." */
      this.mensaje = "Texto cambiado";
    },
    sumar() {
      this.valor = this.valor + 100;
    },
    agregar() {
      console.log(this.nombre);
      console.log(this.apellido);
      const nuevo = {
        nombre: this.nombre,
        apellido: this.apellido,
      };
      this.lista.unshift(nuevo);
      this.resetear();
    },
    resetear() {
      this.nombre = null;
      this.apellido = null;
    },
    /* agregar2(event) {
      console.log(event);

      if (event.charCode !== 13) return;

      this.agregar();
    }, */
    /* agregar2({ charCode }) {
      console.log(charCode);
      if (charCode !== 13) return;

      this.agregar();
    }, */
    /* Lo anterior era ineficiente */
    agregar2({ charCode }) {
      console.log(charCode);

      if (charCode !== 13) return;

      if (this.nombre !== null && this.apellido !== null) {
        this.agregar();
      }
    },
  },
});

app.mount("#myApp"); /* monta la app, con cualquier nombre */
