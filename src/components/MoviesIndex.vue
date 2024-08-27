<script>
export default {
  props: {
    movies: Array,
  },
};
</script>

<template>
  <div>
    <h1>All Movies</h1>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.title }} [{{ movie.year }}]</h2>
      <img v-bind:src="movie.image" width="400" />
      <h3>{{ movie.genre }}</h3>
      <p>{{ movie.description }}</p>
    </div>
  </div>
</template>

<style></style>
