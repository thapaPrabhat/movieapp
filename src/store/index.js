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
})
