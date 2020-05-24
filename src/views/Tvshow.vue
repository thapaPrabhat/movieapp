<template>
  <div class="p-8">
    <div class="flex justify-between">
      <h2 class="text-2xl">Popular Shows</h2>
      <a href="#" class="text-gray-400 text-sm">View all</a>
    </div>

    <TvCard :shows="popular" />
    <div class="flex justify-between">
      <h2 class="text-2xl">Top Rated Shows</h2>
      <a href="#" class="text-gray-400 text-sm">View all</a>
    </div>
    <TvCard :shows="nowPlaying" />
  </div>
</template>

<script>
import TvCard from "../components/TvCard";
import { mapGetters } from "vuex";
export default {
  name: "Tvshow",
  components: { TvCard },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("genre/getTvShowGenre");
    this.$store.dispatch("tv/getShows", "popular");
    this.$store.dispatch("tv/getShows", "top_rated");
  },
  methods: {},
  computed: {
    ...mapGetters("tv", {
      popular: "popular",
      nowPlaying: "topRated"
    })
  }
};
</script>
    