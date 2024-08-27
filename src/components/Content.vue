<script>
import MoviesIndex from "./MoviesIndex.vue";
import MoviesNew from "./MoviesNew.vue";

export default {
  components: {
    MoviesIndex,
    MoviesNew,
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

  methods: {
    handleCreateMovie: function (params) {
      axios
        .post("http://localhost:5000/movies.json", params)
        .then((response) => {
          console.log("movies create", response);
          this.movies.push(response.data);
        })
        .catch((error) => {
          console.log("movies create error", error.response);
        });
    },
  },
};
</script>

<template>
  <main>
    <MoviesIndex v-bind:movies="movies" />
    <MoviesNew v-on:createMovie="handleCreateMovie" />
  </main>
</template>

<style></style>
