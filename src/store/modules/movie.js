// import axios from 'axios'
import router from '../../router'

// initial state
const state = () => ({
  popular: [],
  nowPlaying: [],
  movie: {}
})

// getters
const getters = {
  popular(state) {
    return state.popular
  },
  nowPlaying(state) {
    return state.nowPlaying
  },
  movie(state) {
    return state.movie
  }
}

// actions
const actions = {
  getMovies({ commit }, type) {
    window.axios
      .get("https://api.themoviedb.org/3/movie/" + type)
      .then(res => {
        commit('setMovie', { data: res.data.results, type: type })
      });

  },
  getMovieDetail({ commit }, id) {
    window.axios
      .get("https://api.themoviedb.org/3/movie/" + id + '?append_to_response=credits,videos,images')
      .then(res => {
        commit('setMovieDetail', res.data)
      }).catch((err) => {
        if (err.response.status == 404)
          router.push({ name: 'NotFound' })
      });
  }
}

// mutations
const mutations = {
  setMovie(state, { data, type }) {
    if (type == 'popular')
      state.popular = data
    else if (type == 'now_playing')
      state.nowPlaying = data
  },
  setMovieDetail(state, movie) {
    state.movie = movie
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}