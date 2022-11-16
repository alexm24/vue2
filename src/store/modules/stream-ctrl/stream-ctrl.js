import { GETTER_STREAM_CTRL, MUTATION_STREAM_CTRL } from '@/store/const/type'

const state = {
  isVisible: false,
  id: '',
  name: '',
  key: ''
}

const actions = {}

const mutations = {
  [MUTATION_STREAM_CTRL.OPEN]: (state, { id, name, key }) => {
    state.isVisible = true
    state.id = id
    state.name = name
    state.key = key
  },
  [MUTATION_STREAM_CTRL.CLOSE]: (state) => {
    state.isVisible = false
    state.id = ''
    state.name = ''
    state.key = ''
  }
}

const getters = {
  [GETTER_STREAM_CTRL.IS_VISIBLE]: (state) => state.isVisible,
  [GETTER_STREAM_CTRL.INFO]: ({ id, name, key }) => ({ id, name, key })
}

export const streamCtrl = { state, actions, mutations, getters }
