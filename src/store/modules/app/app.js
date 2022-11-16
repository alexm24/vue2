import axios from 'axios'
import { GETTER_APP, MUTATION_APP, ACTION_AXIOS_APP } from '@/store/const/type'
import { API_URL } from '@/const'

const state = {
  user: {},
  isAdmin: false,
  isAnon: false
}

const actions = {
  [ACTION_AXIOS_APP.ADMIN_POST]: ({ commit }, username) => {
    axios
      .post(API_URL.USER, { username })
      .then((res) => {
        const { data } = res
        commit(MUTATION_APP.IS_ADMIN, data)
      })
      .catch((err) => console.log(err.response.data))
  }
}

const mutations = {
  [MUTATION_APP.USER]: (state, user) => (state.user = user),
  [MUTATION_APP.IS_ADMIN]: (state, { is_admin }) => (state.isAdmin = is_admin),
  [MUTATION_APP.IS_ANON]: (state, isAnon) => (state.isAnon = isAnon)
}

const getters = {
  [GETTER_APP.USER]: (state) => state.user,
  [GETTER_APP.IS_ADMIN]: (state) => state.isAdmin,
  [GETTER_APP.IS_ANON]: (state) => state.isAnon
}

export const app = { state, actions, mutations, getters }
