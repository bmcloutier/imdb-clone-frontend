<script>
import axios from "axios";
import MoviesIndex from "./MoviesIndex.vue";
import MoviesNew from "./MoviesNew.vue";

export default {
  components: {
    MoviesIndex,
    MoviesNew,
  },

  data: function () {
    return {
      movies: [],
      // movies: [
      //   // Alien Franchise
      //   {
      //     id: 1,
      //     title: "Alien",
      //     year: 1979,
      //     genre: "Horror, Sci-Fi",
      //     description:
      //       "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
      //     image: "https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg",
      //   },
      //   {
      //     id: 2,
      //     title: "Aliens",
      //     year: 1986,
      //     genre: "Horror, Sci-Fi",
      //     description:
      //       "Ellen Ripley returns to planet LV-426 to battle the Alien menace with a team of colonial marines.",
      //     image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Aliens_poster.jpg",
      //   },
      //   {
      //     id: 3,
      //     title: "Alien 3",
      //     year: 1992,
      //     genre: "Horror, Sci-Fi",
      //     description: "Ripley continues her battle with the alien after crash-landing on a prison planet.",
      //     image: "https://m.media-amazon.com/images/I/41JDGPK1VML._AC_UF894,1000_QL80_.jpg",
      //   },
      //   {
      //     id: 4,
      //     title: "Alien: Resurrection",
      //     year: 1997,
      //     genre: "Horror, Sci-Fi",
      //     description:
      //       "200 years after her death, Ripley is cloned and revived for a mission to extract the Alien queen inside her.",
      //     image:
      //       "https://m.media-amazon.com/images/M/MV5BNDMyNmU5ZGQtNzhiZi00NjRjLTk3NGUtMmQ5YWU4ODlkNTBhXkEyXkFqcGc@._V1_.jpg",
      //   },
      //   {
      //     id: 5,
      //     title: "Prometheus",
      //     year: 2012,
      //     genre: "Horror, Sci-Fi",
      //     description:
      //       "A team of explorers discover a clue to the origins of mankind on Earth, leading them on a journey to the darkest corners of the universe.",
      //     image: "https://upload.wikimedia.org/wikipedia/en/a/a3/Prometheusposterfixed.jpg",
      //   },
      //   {
      //     id: 6,
      //     title: "Alien: Covenant",
      //     year: 2017,
      //     genre: "Horror, Sci-Fi",
      //     description:
      //       "A colony ship lands on a dark, alien world, where they encounter a terrifying threat beyond their imagination.",
      //     image:
      //       "https://play-lh.googleusercontent.com/KyHH_uXQI5nq7hWDjmtX-s5gC5EZFZHrtkxTkeaky5Bnb0P5Lsl-dkilEOf3tii1lRBLrA",
      //   },
      //   {
      //     id: 7,
      //     title: "Alien: Romulus",
      //     year: 2024,
      //     genre: "Horror, Sci-Fi",
      //     description: "A group of young adults attempt to escape their awful world.",
      //     image: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/06/alien-romulus-poster.jpg",
      //   },
      //   // Predator Franchise
      //   {
      //     id: 8,
      //     title: "Predator",
      //     year: 1987,
      //     genre: "Action, Sci-Fi",
      //     description:
      //       "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.",
      //     image: "https://upload.wikimedia.org/wikipedia/en/9/95/Predator_Movie.jpg",
      //   },
      //   {
      //     id: 9,
      //     title: "Predator 2",
      //     year: 1990,
      //     genre: "Action, Sci-Fi",
      //     description:
      //       "The Predator returns to Earth, this time to stake a claim on the war-torn streets of Los Angeles.",
      //     image:
      //       "https://lumiere-a.akamaihd.net/v1/images/predator2_feature-poster_584x800_5d26905d.jpeg?region=0%2C0%2C584%2C800",
      //   },
      //   {
      //     id: 10,
      //     title: "Predators",
      //     year: 2010,
      //     genre: "Action, Sci-Fi",
      //     description: "A group of elite warriors are hunted by members of a merciless alien race known as Predators.",
      //     image:
      //       "https://m.media-amazon.com/images/M/MV5BNjFmNDNlMGItMDQxMS00ZWMxLTg4MmQtMTBiNWU3ZDU1Nzk1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      //   },
      //   {
      //     id: 11,
      //     title: "The Predator",
      //     year: 2018,
      //     genre: "Action, Sci-Fi",
      //     description:
      //       "A young boy accidentally triggers the Predators' return to Earth. Only a ragtag crew of ex-soldiers can prevent the end of the human race.",
      //     image: "https://granitebaytoday.org/wp-content/uploads/2018/10/predator-new.jpg",
      //   },
      //   {
      //     id: 12,
      //     title: "Prey",
      //     year: 2022,
      //     genre: "Action, Horror",
      //     description: "A Native American woman fights for her life against the most advanced killing machine.",
      //     image: "https://i0.wp.com/screen-connections.com/wp-content/uploads/2023/08/Prey-4K.UHD_.Coverart.jpg",
      //   },
      //   // Alien vs. Predator Franchise
      //   {
      //     id: 13,
      //     title: "Alien vs. Predator",
      //     year: 2004,
      //     genre: "Action, Horror, Sci-Fi",
      //     description:
      //       "During an archaeological expedition in Antarctica, a team of scientists finds themselves caught in a battle between two alien species.",
      //     image: "https://www.avpgalaxy.net/wordpress/wp-content/uploads/2022/04/avp-ultimate-prey-review-00.jpg",
      //   },
      //   {
      //     id: 14,
      //     title: "Aliens vs. Predator: Requiem",
      //     year: 2007,
      //     genre: "Action, Horror, Sci-Fi",
      //     description:
      //       "Warring alien and predator races descend on a rural Colorado town, where unsuspecting residents must band together for any chance of survival.",
      //     image: "https://media.themoviedb.org/t/p/w500/jCyJN1vj8jqJJ0vNw4hDH2KlySO.jpg",
      //   },
      // ],
    };
  },

  created: function () {
    this.handleIndexMovies();
  },

  methods: {
    handleIndexMovies: function () {
      axios.get("http://localhost:5000/movies").then((response) => {
        console.log("movies index", response);
        this.movies = response.data;
      });
    },

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
