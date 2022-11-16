import { GETTER_STREAM_CHAT_CLEAR, MUTATION_STREAM_CHAT_CLEAR } from '@/store/const/type'

const state = {
  isVisible: false,
  username: ''
}

const actions = {}

const mutations = {
  [MUTATION_STREAM_CHAT_CLEAR.OPEN]: (state, username) => {
    state.isVisible = true
    state.username = username
  },
  [MUTATION_STREAM_CHAT_CLEAR.CLOSE]: (state) => {
    state.isVisible = false
    state.username = ''
  }
}

const getters = {
  [GETTER_STREAM_CHAT_CLEAR.IS_VISIBLE]: (state) => state.isVisible,
  [GETTER_STREAM_CHAT_CLEAR.CHANNEL]: ({ username }) => username
}

export const streamChatClear = { state, actions, mutations, getters }
