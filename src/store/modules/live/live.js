import axios from 'axios'
import { API_URL } from '@/const'
import { MUTATION_LIVE, ACTION_AXIOS_LIVE, GETTER_LIVE } from '../../const/type'

const state = {
  items: []
}

const actions = {
  [ACTION_AXIOS_LIVE.GET]: ({ commit }) => {
    axios
      .get(API_URL.LIVE)
      .then((res) => {
        const { data } = res
        if (data) {
          const live = data.reduce((a, e) => ({ ...a, [e.id]: { ...e } }), {})
          commit(MUTATION_LIVE.UPDATE, live)
        }
      })
      .catch((err) => console.log(err))
  }
}

const mutations = {
  [MUTATION_LIVE.UPDATE]: (state, live) => (state.items = live)
}

const getters = {
  [GETTER_LIVE.ALL]: (state) => state.items
}

export const live = { state, actions, mutations, getters }
