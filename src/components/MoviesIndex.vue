<script>
export default {
  props: {
    movies: Array,
  },
};
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold text-center mb-8">Movie Collection</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="movie in movies" :key="movie.id" class="movie-card flex flex-col items-center text-center p-4">
        <img :src="movie.image" alt="Movie Poster" class="movie-image mb-4 rounded-lg" />
        <h2 class="movie-title text-2xl font-bold mb-2">{{ movie.title }}</h2>
        <p class="movie-year text-lg text-gray-400 mb-1">{{ movie.year }}</p>
        <p class="movie-genre text-sm text-yellow-400 mb-2">{{ movie.genre }}</p>
        <p class="movie-description text-sm text-gray-300">{{ movie.description }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>
