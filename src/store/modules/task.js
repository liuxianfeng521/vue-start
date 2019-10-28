
const state = {
  row: 'hello vuex'
}

const mutations = {
  SET_ROW: (state, row) => {
    state.row = row
  }
}

const actions = {
  setRow({ commit }, row) {
    commit('SET_ROW', row)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
