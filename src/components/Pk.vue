<template>
  <div class="container">
    <img :src="imagen" alt="No disponible">
    <label >{{ nombre }}</label>
  </div>
</template>

<script>
export default {
    props: {
        imagen:{},
        nombre:{
            type: String,
            required: true,
            default: "XXX",
        }

    },

    

}
</script>

<style>

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 400px;
    margin: 1px auto;

    background: cornflowerblue;

}


img {
    width: 300px;
    width: 300px;
    background: burlywood;


}

</style>