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
    },
  },
};
</script>

<template>
  <div>
    <h1>New Movie</h1>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        Name:
        <input type="text" v-model="newMovieParams.url" />
      </div>
      <div>
        image
        <input type="text" v-model="newMovieParams.url" />
      </div>
      <div>
        description
        <input type="text" v-model="newMovieParams.url" />
      </div>
      <div>
        year
        <input type="number" v-model="newMovieParams.url" />
      </div>
      <div>
        genre
        <input type="text" v-model="newMovieParams.url" />
      </div>
      <div></div>
      <button type="submit">Create Movie</button>
    </form>
  </div>
</template>

<style></style>
