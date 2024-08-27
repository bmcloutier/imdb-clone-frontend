<script>
import MoviesIndex from "./MoviesIndex.vue";

export default {
  components: {
    MoviesIndex,
  },

  data: function () {
    return {
      movies: [
        {
          id: 1,
          title: "Alien: Romulus",
          year: 2024,
          genre: "horror",
          description: "A group of young adults attempt to escape their awful world.",
          image: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/06/alien-romulus-poster.jpg",
        },
        {
          id: 2,
          title: "Prey",
          year: 2022,
          genre: "horror",
          description: "A native american fights for her life agains the most advanced killing machine.",
          image: "https://i0.wp.com/screen-connections.com/wp-content/uploads/2023/08/Prey-4K.UHD_.Coverart.jpg",
        },
      ],
    };
  },
};
</script>

<template>
  <main>
    <MoviesIndex v-bind:movies="movies" />
  </main>
</template>

<style></style>
