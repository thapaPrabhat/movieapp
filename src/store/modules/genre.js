import axios from 'axios'

// initial state
const state = () => ({
  genres: [],
  tvShowGenres: [],
})

// getters
const getters = {
  genres(state) {
    return state.genres
  },
  tvShowGenres(state) {
    return state.tvShowGenres
  }
}

// actions
const actions = {
  getGenre({ commit }) {
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list")
      .then(res => {
        if (res.data.error) throw res.data;
        commit('setGenre', res.data.genres)
      })
      .catch(err => {
        console.log('get genre error : ' + err)
      })
      ;
  },
  getTvShowGenre({ commit }) {
    axios
      .get("https://api.themoviedb.org/3/genre/tv/list")
      .then(res => {
        if (res.data.error) throw res.data;
        commit('setTvShowGenre', res.data.genres)
      })
      .catch(err => {
        console.log('get tv show genre error : ' + err)
      })
      ;
  },
}

// mutations
const mutations = {
  setGenre(state, genres) {
    state.genres = genres
  },
  setTvShowGenre(state, genres) {
    state.tvShowGenres = genres
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}