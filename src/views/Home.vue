<template>
  <div class="p-8">
    <div class="flex justify-between">
      <h2 class="text-2xl">Popular Movies</h2>
      <a href="#" class="text-gray-400 text-sm">View all</a>
    </div>

    <MovieCard :movies="popular" />
    <div class="flex justify-between">
      <h2 class="text-2xl">Now Playing</h2>
      <a href="#" class="text-gray-400 text-sm">View all</a>
    </div>
    <MovieCard :movies="nowPlaying" />
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: { MovieCard },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("movie/getMovies", "popular");
    this.$store.dispatch("movie/getMovies", "now_playing");
  },
  methods: {},
  computed: {
    ...mapGetters("movie", {
      popular: "popular",
      nowPlaying: "nowPlaying"
    })
  }
};
</script>
    