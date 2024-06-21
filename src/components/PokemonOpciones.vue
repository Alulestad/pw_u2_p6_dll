<template>
  <div class="opciones-container">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.name }}</li>
    </ul>
    <!-- order list -->
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.opciones-container {
  display: flex;
  justify-content: center;
}
ul {
  list-style-type: none;
}
li {
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin-bottom: 10px;
  width: 200px;
  background: white;
  cursor: pointer;
}
li:hover {
  background: rgba(0, 0, 0, 0.05);
}
</style>
