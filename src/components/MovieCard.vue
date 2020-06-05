<template>
  <div class="md:flex content-center flex-wrap -mx-2">
    <div class="flex flex-wrap">
      <div
        class="md:flex py-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4"
        v-for="movie in movies"
        :key="movie.id"
      >
        <div class="md:flex-1 p-2 rounded shadow-lg">
          <router-link :to="{name : 'MovieDetail', params : {id : movie.id}}">
            <img
              class="w-full hover:opacity-75 transition ease-in-out duration-150"
              :src="'https://image.tmdb.org/t/p/w300'+movie.poster_path"
              :alt="movie.title"
            />
          </router-link>
          <div class="px-4 pt-4">
            <p class="text-lg mb-2">
              <router-link :to="{name : 'MovieDetail', params : {id : movie.id}}">{{ movie.title }}</router-link>
            </p>
            <p class="text-gray-700 text-sm flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 473.486 473.486"
                v-for="i in 5"
                :key="i"
                :class="i <= (movie.vote_average/ 2) ? 'text-yellow-400' : 'text-gray-600'"
                class="h-4 w-4 fill-current mr-1"
              >
                <path
                  d="M473.486 182.079l-162.871-24.127L235.904 11.23l-73.276 147.445L0 184.389l117.584 115.252-25.798 162.616 145.946-76.215 146.684 74.787-27.384-162.356z"
                />
              </svg>
            </p>
            <p
              class="text-gray-700 text-sm mt-1"
            >{{ movie.vote_average * 10 }}% | {{ movie.release_date }}</p>
          </div>
          <div class="px-4 pb-4">
            <span class="text-sm text-gray-700 mr-2">{{ movieGenre(movie) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["movies"],
  data() {
    return {};
  },
  methods: {
    movieGenre(movie) {
      var movieGenres = "";
      this.genres
        .filter(function(genre) {
          return movie.genre_ids.indexOf(genre.id) > -1;
        })
        .forEach(function(genre, index) {
          movieGenres += genre.name;
          if (movie.genre_ids.length > index + 1) movieGenres += ", ";
        });

      return movieGenres;
    }
  },
  computed: {
    ...mapGetters("genre", ["genres"])
  }
};
</script>