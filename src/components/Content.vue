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
          genre: "Horror",
          description: "A group of young adults attempt to escape their awful world.",
          image: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/06/alien-romulus-poster.jpg",
        },
        {
          id: 2,
          title: "Prey",
          year: 2022,
          genre: "Horror",
          description: "A native American fights for her life against the most advanced killing machine.",
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
  <main class="bg-gray-900 text-white min-h-screen py-8">
    <div class="mt-8">
      <MoviesNew v-on:createMovie="handleCreateMovie" />
      <MoviesIndex v-bind:movies="movies" />
    </div>
  </main>
</template>

<style scoped>
.movie-card {
  background-color: #1c1c1c;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.movie-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
}

.movie-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.movie-title {
  color: #ffffff;
}

.movie-year,
.movie-genre,
.movie-description {
  color: #bbbbbb;
}

.movie-genre {
  font-weight: bold;
  color: #ffcc00;
}
</style>
