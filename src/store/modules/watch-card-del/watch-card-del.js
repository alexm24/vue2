import { GETTER_WATCH_CARD_DEL, MUTATION_WATCH_CARD_DEL } from '@/store/const/type'
import { LIFE_CYCLE } from '@/const/app'
const state = {
  isVisible: false,
  id: '',
  name: '',
  mode: LIFE_CYCLE.PAST
}

const actions = {}

const mutations = {
  [MUTATION_WATCH_CARD_DEL.OPEN]: (state, { id, name, mode }) => {
    state.isVisible = true
    state.id = id
    state.name = name
    state.mode = mode
  },
  [MUTATION_WATCH_CARD_DEL.CLOSE]: (state) => {
    state.isVisible = false
    state.id = ''
    state.name = ''
  }
}

const getters = {
  [GETTER_WATCH_CARD_DEL.IS_VISIBLE]: (state) => state.isVisible,
  [GETTER_WATCH_CARD_DEL.INFO]: ({ id, name, mode }) => ({ id, name, mode })
}

export const watchCardDel = { state, actions, mutations, getters }
