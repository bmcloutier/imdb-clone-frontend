<script>
export default {
  props: {
    movies: Array,
  },
};
</script>

<template>
  <div class="container mx-auto py-8">
    <h1 class="text-5xl font-extrabold text-center text-yellow-400 mb-12">Movie Collection</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="movie-card bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <div class="movie-image-container h-96">
          <img :src="movie.image" alt="Movie Poster" class="movie-image w-full h-full object-cover" />
        </div>
        <div class="p-4">
          <h2 class="movie-title text-2xl font-bold text-yellow-400 mb-2">{{ movie.title }}</h2>
          <p class="movie-year text-lg text-gray-400">{{ movie.year }}</p>
          <p class="movie-genre text-sm text-yellow-400 uppercase tracking-wide">{{ movie.genre }}</p>
          <p class="movie-description text-sm text-gray-300 mt-4">{{ movie.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-card {
  transition: transform 0.3s ease;
}

.movie-card:hover {
  transform: translateY(-10px);
}

.movie-image-container {
  height: 384px; /* h-96 = 24rem or 384px */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-bottom: 4px solid #ffcc00; /* Adds a small accent color to the image */
}
</style>
