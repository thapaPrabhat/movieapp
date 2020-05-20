import Vue from 'vue'
import Vuex from 'vuex'
import genre from './modules/genre'
import movie from './modules/movie'
import tv from './modules/tv'
import actor from './modules/actor'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    genre, movie, tv, actor
  },
  actions: {
    setApiKey() {
      // todo remove auth details from here 
      window.axios.defaults.headers.common["Authorization"] =
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGNjYzc4OWFmNzhhNDc3Njc1NTk5ODU0YWM4ZjlkNyIsInN1YiI6IjVlYzBmMTBmM2QzNTU3MDAxZWU0ZjNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KSSzrkmaeWJVQFRUqIjh-Cr_2CVTN7rPHZv3o-6W0KM";
    }
  }
})
