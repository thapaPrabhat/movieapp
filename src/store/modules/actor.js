// import axios from 'axios'
import router from '../../router'

// initial state
const state = () => ({
  actors: [],
  page: 1,
  actor: {},
  maxPagination: false
})

// getters
const getters = {
  actors(state) {
    return state.actors
  },
  actor(state) {
    return state.actor
  },
  page(state) {
    return state.page
  }
}

// actions
const actions = {
  getActors({ commit, state }) {
    if (!state.maxPagination) {
      window.axios
        .get("https://api.themoviedb.org/3/person/popular?page=" + state.page)
        .then(res => {
          if (state.page < res.data.total_pages) {
            commit('setActors', res.data.results)
            commit('setPage', res.data.page + 1)
          } else
            commit('setMaxPagination', true)
        });
    }
  },
  getActorDetail({ commit }, id) {
    window.axios
      .get("https://api.themoviedb.org/3/person/" + id + "?append_to_response=external_ids,combined_credits")
      .then(res => {
        commit('setActorDetail', res.data)
      }).catch((err) => {
        if (err.response.status == 404)
          router.push({ name: 'NotFound' })
      });
  }
}

// mutations
const mutations = {
  setPage(state, page) {
    state.page = page
  },
  setActors(state, data) {
    state.actors = [...state.actors, ...data]
  },
  setActorDetail(state, actor) {
    state.actor = actor
  },
  setMaxPagination(state, value) {
    state.maxPagination = value
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}