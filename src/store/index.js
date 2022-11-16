import Vue from 'vue'
import Vuex from 'vuex'
import { app, broadcast, live, streamCtrl, watchCardDel, streamChatClear } from '@/store/modules'
Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: { broadcast, live, app, streamCtrl, watchCardDel, streamChatClear }
})
