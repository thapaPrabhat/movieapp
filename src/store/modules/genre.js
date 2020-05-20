import axios from 'axios'

// initial state
const state = () => ({
  genres: []
})

// getters
const getters = {
  genres(state) {
    return state.genres
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
}

// mutations
const mutations = {
  setGenre(state, genres) {
    state.genres = genres
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}