import axios from 'axios'
import { API_URL, LIFE_CYCLE } from '@/const'
import { getBroadcast } from './func'
import {
  MUTATION_BROADCAST,
  ACTION_AXIOS_BROADCAST,
  GETTER_BROADCAST,
  ACTION_AXIOS_IMAGE
} from '@/store/const/type'

const state = {
  future: {},
  past: {}
}

const actions = {
  [ACTION_AXIOS_BROADCAST.GET]: ({ commit }) => {
    axios
      .get(API_URL.BROADCAST_V1)
      .then((res) => {
        const { data } = res
        if (!data) return
        const items = getBroadcast(data)
        commit(MUTATION_BROADCAST.UPDATE, { items, mode: LIFE_CYCLE.FUTURE })
      })
      .catch((err) => console.log(err.response.data))
  },
  [ACTION_AXIOS_BROADCAST.POST_GET_ARCH]: ({ commit }, username) => {
    axios
      .post(`${API_URL.BROADCAST_V1}/arch`, { username })
      .then((res) => {
        const { data } = res
        if (!data) return
        const items = getBroadcast(data)
        commit(MUTATION_BROADCAST.UPDATE, { items, mode: LIFE_CYCLE.PAST })
      })
      .catch((err) => console.log(err.response.data))
  },
  [ACTION_AXIOS_BROADCAST.DEL_ID]: ({ commit }, { id, mode }) => {
    axios
      .delete(`${API_URL.BROADCAST_V1}/${id}`)
      .then(() => {
        commit(MUTATION_BROADCAST.DEL_BY_ID, { id, mode })
      })
      .catch((err) => console.log(err.response.data))
  },
  [ACTION_AXIOS_BROADCAST.POST]: async ({ commit }, item) => {
    try {
      const { data } = await axios.post(API_URL.BROADCAST_V1, item)
      const { id, name, description, owner, start_time, stream_key, preview_url } = data
      const broadcast = {
        [id]: { id, name, description, owner, start_time, stream_key, preview_url }
      }
      commit(MUTATION_BROADCAST.ADD, { broadcast, mode: LIFE_CYCLE.FUTURE })
      return id
    } catch (e) {
      console.log(e.response.data)
    }
  },
  [ACTION_AXIOS_BROADCAST.PUT]: async ({ commit }, item) => {
    try {
      const { data } = await axios.put(API_URL.BROADCAST_V1, item)
      commit(MUTATION_BROADCAST.CHANGE, data)
      return data.id
    } catch (e) {
      console.log(e.response.data)
    }
  },
  [ACTION_AXIOS_IMAGE.POST]: async ({ commit }, item) => {
    const { id, file } = item
    const bodyFormData = new FormData()
    bodyFormData.append('id', id)
    bodyFormData.append('file', file)
    const config = { headers: { 'Content-Type': 'multipart/form-data' } }
    axios
      .post(API_URL.IMAGE, bodyFormData, config)
      .then(({ data }) => commit(MUTATION_BROADCAST.ADD_IMAGE, data))
      .catch((e) => e.response.data)
  },
  [ACTION_AXIOS_IMAGE.PUT]: async ({ commit }, id) => {
    axios
      .put(`${API_URL.IMAGE}/${id}`)
      .then(({ data }) => commit(MUTATION_BROADCAST.DEL_IMAGE, data))
      .catch((e) => e.response.data)
  },
  [ACTION_AXIOS_BROADCAST.PATCH]: async ({ commit }, id) => {
    try {
      const { data } = await axios.patch(API_URL.BROADCAST, { id })
      if (!data) return false
      commit(MUTATION_BROADCAST.DEL_BY_ID, { id: data.id, mode: LIFE_CYCLE.FUTURE })
      const broadcast = { [data.id]: { ...data } }
      commit(MUTATION_BROADCAST.ADD, { broadcast, mode: LIFE_CYCLE.PAST })
      return true
    } catch (e) {
      console.log(e.response.data)
    }
  }
}

const mutations = {
  [MUTATION_BROADCAST.UPDATE]: (state, { items, mode }) => {
    if (mode === LIFE_CYCLE.FUTURE) state.future = items
    else state.past = items
  },
  [MUTATION_BROADCAST.DEL_BY_ID]: (state, { id, mode }) => {
    const isPastBroadcast = mode === LIFE_CYCLE.PAST
    const items = isPastBroadcast ? { ...state.past } : { ...state.future }
    delete items[id]
    if (isPastBroadcast) state.past = items
    else state.future = items
  },
  [MUTATION_BROADCAST.ADD]: (state, { broadcast, mode }) => {
    if (mode === LIFE_CYCLE.FUTURE) state.future = { ...state.future, ...broadcast }
    else state.past = { ...broadcast, ...state.past }
  },
  [MUTATION_BROADCAST.CHANGE]: (state, item) => {
    state.future[item.id] = { ...item, preview_url: state.future[item.id].preview_url }
  },
  [MUTATION_BROADCAST.ADD_IMAGE]: (state, item) => {
    state.future[item.id] = { ...state.future[item.id], ...item }
  },
  [MUTATION_BROADCAST.DEL_IMAGE]: (state, item) => {
    state.future[item.id] = { ...state.future[item.id], preview_url: '' }
  }
}

const getters = {
  [GETTER_BROADCAST.FUTURE]: (state) => state.future,
  [GETTER_BROADCAST.PAST]: (state) => state.past
}

export const broadcast = { state, actions, mutations, getters }
