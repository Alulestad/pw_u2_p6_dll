<template>
  <div class="pokemon-container">
    <img
      v-show="mostrar"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
      alt="No se pudo visualizar la imagen"
    />

    <img
      v-show="!mostrar"
      class="oculta-pokemon"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
      alt="No se pudo visualizar la imagen"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: true,
    };
  },
};
</script>

<style scoped>
.oculta-pokemon {
  filter: brightness(0);
}

img {
  height: 200px;
  width: 200px;
  position: absolute; /*solapa los elementos en un solo espacio*/
  right: 38%;
  /*que porcentaje tiene de espacio del borde derecho*/
}
.pokemon-container {
  height: 200px;
}
</style>
