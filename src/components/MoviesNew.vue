<script>
export default {
  data: function () {
    return {
      newMovieParams: {},
    };
  },
  methods: {
    handleSubmit: function () {
      this.$emit("createMovie", this.newMovieParams);
      this.newMovieParams = {};
      this.$router.push({ path: "/movies" });
    },
  },
};
</script>

<template>
  <div class="bg-gray-800 text-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-center text-yellow-400">Add a New Movie</h1>
    <form v-on:submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="title" class="block text-lg font-medium mb-2">Title:</label>
        <input
          type="text"
          id="title"
          v-model="newMovieParams.title"
          class="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div>
        <label for="image" class="block text-lg font-medium mb-2">Image URL:</label>
        <input
          type="text"
          id="image"
          v-model="newMovieParams.image"
          class="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div>
        <label for="description" class="block text-lg font-medium mb-2">Description:</label>
        <textarea
          id="description"
          v-model="newMovieParams.description"
          class="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          rows="4"
        ></textarea>
      </div>
      <div>
        <label for="year" class="block text-lg font-medium mb-2">Year:</label>
        <input
          type="number"
          id="year"
          v-model="newMovieParams.year"
          class="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div>
        <label for="genre" class="block text-lg font-medium mb-2">Genre:</label>
        <input
          type="text"
          id="genre"
          v-model="newMovieParams.genre"
          class="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <button
        type="submit"
        class="w-full py-3 mt-6 bg-yellow-400 text-gray-900 font-bold rounded hover:bg-yellow-500 transition duration-300"
      >
        Create Movie
      </button>
    </form>
  </div>
</template>

<style scoped>
/* Scoped styles for the MoviesNew component */
</style>
