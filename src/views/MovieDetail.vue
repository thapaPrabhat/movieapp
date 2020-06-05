<template>
  <div>
    <div class="border-b border-gray-800">
      <div class="mx-auto px-4 py-16 flex flex-col md:flex-row">
        <div class="flex-none" v-if="movie.poster_path">
          <img :src="'https://image.tmdb.org/t/p/w400' + movie.poster_path" alt="poster" />
        </div>
        <div class="md:ml-24">
          <h2 class="text-4xl mt-4 md:mt-0 font-semibold">{{ movie.title }}</h2>
          <div class="flex flex-wrap items-center text-gray-400 text-sm">
            <svg class="fill-current text-orange-500 w-4" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <path
                  d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                  data-name="star"
                />
              </g>
            </svg>
            <span class="ml-1">{{ movie.vote_average }}</span>
            <span class="mx-2">|</span>
            <span>{{ movie.release_date }}</span>
            <span class="mx-2">|</span>
            <span
              v-if="movie.genres"
            >{{ Array.prototype.map.call(movie.genres, function(item) { return item.name; }).join(", ") }}</span>
          </div>

          <p class="text-gray-300 mt-8">{{ movie.overview }}</p>

          <div class="mt-12">
            <!-- todo put a link to view all crew members.. -->
            <h4 class="text-white font-semibold">Featured Crew</h4>
            <div class="flex mt-4" v-if="movie.credits">
              <div class="mr-8" v-for="crew in movie.credits.crew.slice(0,4)" :key="crew.credit_id">
                <div>{{ crew.name }}</div>
                <div class="text-sm text-gray-400">{{ crew.job }}</div>
              </div>
            </div>
          </div>

          <div>
            <div class="mt-12" v-if="movie.videos && movie.videos.results.length">
              <button
                @click="showTrailer = true"
                class="flex inline-flex items-center bg-orange-500 text-gray-900 rounded font-semibold px-5 py-4 hover:bg-orange-600 transition ease-in-out duration-150"
              >
                <svg class="w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  />
                </svg>
                <span class="ml-2">Play Trailer</span>
              </button>
            </div>

            <div v-if="showTrailer">
              <div
                style="background-color: rgba(0, 0, 0, .5);"
                class="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto"
              >
                <div class="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
                  <div class="bg-gray-900 rounded">
                    <div class="flex justify-end pr-4 pt-2">
                      <button
                        @click="showTrailer = false"
                        class="text-3xl leading-none hover:text-gray-300"
                      >&times;</button>
                    </div>
                    <div class="modal-body px-8 py-8">
                      <div
                        class="responsive-container overflow-hidden relative"
                        style="padding-top: 56.25%"
                      >
                        <iframe
                          class="responsive-iframe absolute top-0 left-0 w-full h-full"
                          :src="'https://www.youtube.com/embed/'+ movie.videos.results[0].key"
                          style="border:0;"
                          allow="autoplay; encrypted-media"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end movie-info -->

    <div class="border-b border-gray-800">
      <div class="container mx-auto px-4 py-16">
        <div class="flex justify-between">
          <h2 class="text-4xl font-semibold">Cast</h2>
          <a href="#" class="text-gray-400 text-sm">View all</a>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:grid-cols-5 gap-4"
          v-if="movie.credits"
        >
          <div class="mt-8" v-for="cast in movie.credits.cast.slice(0,5)" :key="cast.credit_id">
            <router-link :to="{name: 'ActorDetail', params: {id: cast.id}}">
              <img
                :src="'https://image.tmdb.org/t/p/w200' + cast.profile_path"
                :alt="cast.name"
                class="hover:opacity-75 transition ease-in-out duration-150"
              />
            </router-link>
            <div class="mt-2">
              <router-link
                :to="{name: 'ActorDetail', params: {id: cast.id}}"
                class="text-lg mt-2 hover:text-gray:300">
                {{ cast.name }}
              </router-link>
              <div class="text-sm text-gray-400">{{ cast.character }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end movie-cast -->

    <div class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-semibold">Images</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" v-if="movie.images">
        <div class="mt-8" v-for="image in movie.images.backdrops.slice(0,6)" :key="image.id">
          <a href="#">
            <img
              :src="'https://image.tmdb.org/t/p/w500/'+image.file_path"
              alt="image1"
              class="hover:opacity-75 transition ease-in-out duration-150"
              @click.prevent="isOpen = true, modalImage = 'https://image.tmdb.org/t/p/original/'+image.file_path"
            />
          </a>
        </div>
      </div>

      <div
        style="background-color: rgba(0, 0, 0, .5);"
        class="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto"
        v-if="isOpen"
      >
        <div class="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
          <div class="bg-gray-900 rounded">
            <div class="flex justify-end pr-4 pt-2">
              <button
                class="text-3xl leading-none hover:text-gray-300"
                @click="isOpen = false, modalImage = ''"
              >&times;</button>
            </div>
            <div class="modal-body px-8 py-8">
              <img :src="modalImage" alt="poster" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end movie-images -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MovieDetail",
  data() {
    return {
      isOpen: false,
      modalImage: "",
      showTrailer: false
    };
  },
  mounted() {
    this.$store.dispatch("movie/getMovieDetail", this.$route.params.id);

    document.body.addEventListener("keyup", e => {
      if (e.keyCode === 27) {
        this.isOpen = false;
        this.modalImage = "";
        this.showTrailer = false;
      }
    });
  },
  methods: {},
  computed: {
    ...mapGetters("movie", ["movie"]),
    ...mapGetters("genre", ["genres"])
  }
};
</script>