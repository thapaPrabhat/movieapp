// import axios from 'axios'

// initial state
const state = () => ({
  popular: [],
  nowPlaying: [],
})

// getters
const getters = {
  popular(state) {
    return state.popular
  },
  nowPlaying(state) {
    return state.nowPlaying
  }
}

// actions
const actions = {
  getMovies({ commit }, type) {
    window.axios
      .get("https://api.themoviedb.org/3/movie/"+ type)
      .then(res => {
        commit('setMovie', {data: res.data.results, type: type})
      });

  }
}

// mutations
const mutations = {
  setMovie(state, {data, type}) {
    if(type == 'popular')
      state.popular = data
    else if (type == 'now_playing')
      state.nowPlaying = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}