<template>
  <div class="p-8">
    <h2 class="text-2xl">Popular Actors</h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="1"
    >
      <div class="actor mt-8" v-for="actor in uniqueActors" :key="actor.id">
        <router-link :to="{name : 'ActorDetail', params: {id: actor.id}}">
          <img
            :src="'https://image.tmdb.org/t/p/w235_and_h235_face'+actor.profile_path"
            alt="profile image"
            class="hover:opacity-75 transition ease-in-out duration-150"
          />
        </router-link>
        <div class="mt-2">
          <router-link :to="{name : 'ActorDetail', params: {id: actor.id}}" class="text-lg hover:text-gray-300">{{ actor.name }}</router-link>
          <div class="text-sm truncate text-gray-400">
            <span
              v-for="known in actor.known_for"
              :key="known.id"
            >{{ known.name ? known.name : known.title }},</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var infiniteScroll = require("vue-infinite-scroll");
import { mapGetters } from "vuex";
export default {
  directives: { infiniteScroll },
  data() {
    return {
      busy: false
    };
  },
  mounted() {},
  methods: {
    loadMore: function() {
      this.busy = true;
      this.$store.dispatch("actor/getActors");
      this.busy = false;
    }
  },
  computed: {
    ...mapGetters("actor", {
      actors: "actors",
      page: "page"
    }),
    uniqueActors() {
     // store the comparison  values in array
     var arr = this.actors
     var comp = 'id'
      const unique = arr
        .map(e => e[comp])

        // store the indexes of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)

        // eliminate the false indexes & return unique objects
        .filter(e => arr[e])
        .map(e => arr[e]);

      return unique;
    }
  }
};
</script>