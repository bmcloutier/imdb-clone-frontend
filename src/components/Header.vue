<script>
export default {
  name: "Header",
};
</script>

<template>
  <header class="bg-gray-800 text-white py-4 shadow-lg">
    <nav class="container mx-auto flex justify-between items-center">
      <div class="flex items-center space-x-6">
        <a href="#" class="text-3xl font-bold tracking-wider text-yellow-400 hover:text-yellow-300">MyMovieSite</a>
        <div class="hidden md:flex space-x-6">
          <RouterLink class="text-lg hover:text-yellow-300" to="/movies">All movies</RouterLink>
          <RouterLink class="text-lg hover:text-yellow-300" to="/movies/new">Create movie</RouterLink>
          <!-- <a href="#" class="text-lg hover:text-yellow-300">Movies</a>
          <a href="#" class="text-lg hover:text-yellow-300">Trending</a> -->
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          class="px-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <a href="#" class="text-lg hover:text-yellow-300">Sign In</a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>
