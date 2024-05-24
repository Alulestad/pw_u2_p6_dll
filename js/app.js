

console.log(Vue); /* este objeto tiene todas las funcionalidades de vue */

/* crea la aplicacion */
const app=Vue.createApp({
    /* vue trabaja a travez de opciones con funcionalidades definidas: options api*/
    /* options api: son conjunto de opciones 
    que tienen una funcionalidad determinada 
    o una funcionalidad específica.   se usan back tics  ` `*/
    template: `
    <h1>Hola mundo desde Vue.js </h1>
    <p>{{1+1}}</p>
    <p>{{false?'Verdadero':'Falso'}}</p>
    `
    /* {{}}: programacion declarativa. Se pone adentro el codigo JS */
}); 

app.mount('#myApp'); /* monta la app, con cualquier nombre */
