<template>
  <div class="opciones-container">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    <!-- order list -->
  </div>
</template>

<script>
export default {
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
