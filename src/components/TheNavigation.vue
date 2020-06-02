<template>
  <header class="bg-gray-800 fixed w-full z-10 top-0">
    <div
      class="container mx-auto sm:flex sm:justify-between sm:items-center md:justify-start sm:px-4 sm:py-3"
    >
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <router-link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 488"
              class="h-10 w-10 fill-current text-gray-200 mx-4"
            >
              <path
                d="M456 152c-13.232 0-24 10.768-24 24v11.608l-72 45.816V168c0-22.056-17.944-40-40-40h-26.848C309.504 114.792 320 94.608 320 72c0-39.704-32.304-72-72-72-27.864 0-52.04 15.944-64 39.168C172.04 15.944 147.864 0 120 0 80.304 0 48 32.296 48 72c0 22.608 10.496 42.792 26.848 56H48c-22.056 0-40 17.944-40 40v224c0 22.056 17.944 40 40 40h120v4.688l-37.656 37.656 11.312 11.312L168 459.312V488h16v-28.688l26.344 26.344 11.312-11.312L184 436.688V432h136c22.056 0 40-17.944 40-40v-65.424l72 45.816V384c0 13.232 10.768 24 24 24s24-10.768 24-24V176c0-13.232-10.768-24-24-24zM248 16c30.88 0 56 25.128 56 56s-25.12 56-56 56-56-25.128-56-56 25.12-56 56-56zm-63.992 88.832A72.125 72.125 0 00202.848 128H165.16a72.465 72.465 0 0018.848-23.168zM64 72c0-30.872 25.12-56 56-56s56 25.128 56 56-25.12 56-56 56-56-25.128-56-56zm280 176v144c0 13.232-10.768 24-24 24H48c-13.232 0-24-10.768-24-24V168c0-13.232 10.768-24 24-24h272c13.232 0 24 10.768 24 24v80zm88 105.424l-72-45.816v-55.216l72-45.824v146.856zM464 384c0 4.416-3.592 8-8 8-4.408 0-8-3.584-8-8V176c0-4.416 3.592-8 8-8 4.408 0 8 3.584 8 8v208z"
              />
              <path
                d="M240 32h16v16h-16zM240 96h16v16h-16zM272 64h16v16h-16zM208 64h16v16h-16zM112 32h16v16h-16zM112 96h16v16h-16zM144 64h16v16h-16zM80 64h16v16H80zM176 184c-52.936 0-96 43.064-96 96s43.064 96 96 96 96-43.064 96-96-43.064-96-96-96zm0 176c-44.112 0-80-35.888-80-80s35.888-80 80-80 80 35.888 80 80-35.888 80-80 80z"
              />
              <path
                d="M227.248 272.688l-72-32a8.064 8.064 0 00-7.608.6A8.004 8.004 0 00144 248v64a8.004 8.004 0 003.64 6.712A8.082 8.082 0 00152 320a7.952 7.952 0 003.248-.688l72-32a8.002 8.002 0 000-14.624zm-67.248 27v-39.376L204.304 280 160 299.688zM312 384h16v16h-16zM280 384h16v16h-16zM248 384h16v16h-16z"
              />
            </svg>
          </router-link>
        </div>
        <p class="text-gray-200 uppercase font-semibold tracking-wide">
          <router-link to="/">Movieapp</router-link>
        </p>
        <span class="text-gray-100"></span>
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between px-4 py-2"
      >
        <nav
          :class="isOpen ? 'block' : 'hidden'"
          class="px-2 pt-2 pb-4 sm:flex sm:p-0 text-sm ml-6"
        >
          <router-link
            to="/"
            class="block px-2 py-1 text-gray-400 hover:text-gray-100 font-medium rounded hover:bg-gray-800"
          >Movies</router-link>
          <router-link
            to="/tv-shows"
            class="mt-1 block px-2 py-1 text-gray-400 hover:text-gray-100 font-medium rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
          >TV</router-link>
          <router-link
            to="/actors"
            class="mt-1 block px-2 py-1 text-gray-400 hover:text-gray-100 font-medium rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
          >Actors</router-link>
        </nav>
        <div class="relative mt-3 md:mt-0">
          <input
            class="bg-gray-900 text-sm rounded-full w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline"
            placeholder="Search"
            v-model="keyword"
            @input="search"
            @keydown="isLoading = true"
          />
          <div class="absolute top-0">
            <svg class="fill-current w-4 text-gray-500 mt-2 ml-2" viewBox="0 0 24 24">
              <path
                class="heroicon-ui"
                d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </div>

          <!-- <div class="spinner top-0 right-0 mr-4 mt-3"></div> -->
          <div class="absolute top-0 right-0 mt-3" v-if="isLoading">
            <div class="hollow-dots-spinner -mr-10">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <div
            class="z-50 absolute bg-gray-700 text-sm rounded w-64 mt-4 search-list overflow-y-scroll"
            v-if="showSearchBox && sugestions.length"
          >
            <ul>
              <li v-for="(sugestion, i) in sugestions" :key="i" class="border-b border-gray-800">
                <router-link
                  :to="{ name: sugestion.media_type == 'person' ? 'ActorDetail' : (sugestion.media_type == 'tv' ? 'TvshowDetail' : 'MovieDetail'), params: { id: sugestion.id }}"
                >
                  <span
                    class="block hover:bg-gray-800 px-3 py-3 flex items-center transition ease-in-out duration-150 text-white"
                    @click="showSearchBox=false, keyword = ''"
                  >
                    <img
                      v-if="sugestion.poster_path"
                      :src="`https://image.tmdb.org/t/p/w92/${sugestion.poster_path}`"
                      alt="poster"
                      class="w-8"
                    />
                    <img v-else src="https://via.placeholder.com/50x75" alt="poster" class="w-8" />
                    <span
                      class="ml-4"
                    >{{ sugestion.name ? sugestion.name : sugestion.original_title }}</span>
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import _ from "lodash";
import axios from "axios";
export default {
  data() {
    return {
      isOpen: false,
      sugestions: "",
      keyword: "",
      showSearchBox: false,
      isLoading: false
    };
  },
  mounted() {
    document.body.addEventListener("keyup", e => {
      if (e.keyCode === 27) {
        this.showSearchBox = false;
      }
    });
  },
  methods: {
    search: _.debounce(function(e) {
      if (!e.target.value.length) {
        this.showSearchBox = false;
      } else {
        axios
          .get(
            "https://api.themoviedb.org/3/search/multi?query=" + e.target.value
          )
          .then(res => {
            this.showSearchBox = true;
            this.sugestions = res.data.results;
            this.isLoading = false
          });
      }
    }, 500)
  }
};
</script>

<style scoped>
/* scrollbar of search suggestion */
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
.search-list {
  height: 28rem;
}
.hollow-dots-spinner,
.hollow-dots-spinner * {
  box-sizing: border-box;
}

.hollow-dots-spinner {
  height: 15px;
  width: calc(30px * 3);
}

.hollow-dots-spinner .dot {
  width: 5px;
  height: 5px;
  margin: 0 calc(5px / 2);
  border: calc(5px / 5) solid gainsboro;
  border-radius: 50%;
  float: left;
  transform: scale(0);
  animation: hollow-dots-spinner-animation 1000ms ease infinite 0ms;
}

.hollow-dots-spinner .dot:nth-child(1) {
  animation-delay: calc(300ms * 1);
}

.hollow-dots-spinner .dot:nth-child(2) {
  animation-delay: calc(300ms * 2);
}

.hollow-dots-spinner .dot:nth-child(3) {
  animation-delay: calc(300ms * 3);
}

@keyframes hollow-dots-spinner-animation {
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
  a.router-link-exact-active{
    color: white;
  }
</style>