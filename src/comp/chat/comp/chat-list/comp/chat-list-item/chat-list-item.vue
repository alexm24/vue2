<template>
  <div class="chat-list-item">
    <aside class="mts-avatar__photo">
      <img v-if="isVisibleAvatar" :src="imgUrl" alt="" class="mts-avatar__image" />
      <LockPerson v-if="item.is_anon" />
    </aside>
    <section>
      <span class="chat-fio">{{ fullname }}</span>
      <span class="chat-msg">
        <span v-if="item.is_question" class="chat-msg-question">Вопрос:</span>
        <span class="chat-msg-text">{{ item.text }}</span>
      </span>
      <span class="chat-msg-footer">
        <span class="chat-time">{{ getTime(item.time) }}</span>
        <ReactionPopup :id="item.id" :key="redraw" @on-redraw="redraw += 1" />
        <ReactionPanel
          :id="item.id"
          :reactions="reactions"
          :selfReaction="selfReaction"
          :username="username"
        />
      </span>
    </section>
  </div>
</template>

<script>
import { URL } from '@/const'
import LockPerson from '@/pic/svg/theater-comedy'
import ReactionPopup from './comp/reaction-popup/reaction-popup'
import ReactionPanel from './comp/reaction-panel/reaction-panel'
import { getDateViewToString } from '../../../../func'
import { getJsonToString, getReactions } from './func'
export default {
  name: 'chat-list-item',
  components: { LockPerson, ReactionPanel, ReactionPopup },
  props: {
    item: { type: Object },
    username: { type: String }
  },
  computed: {
    isVisibleAvatar() {
      if (this.item.is_anon) return false
      return !!this.item.avatar
    }
  },
  data() {
    return {
      reactions: {},
      selfReaction: '',
      imgUrl: '',
      fullname: '',
      redraw: 0
    }
  },
  methods: {
    getTime(date) {
      return getDateViewToString(date)
    },
    initReaction(msg) {
      const item = getJsonToString(msg.reactions)
      this.selfReaction = item[this.username] ? item[this.username] : ''
      this.reactions = getReactions(item)
    }
  },
  watch: {
    item: {
      handler(newItem) {
        this.initReaction(newItem)
      },
      deep: true
    }
  },
  created() {
    this.initReaction(this.item)

    this.imgUrl = `${URL.ISSO_AVATAR}/${this.item.avatar}`
    this.fullname = this.item.is_anon ? 'Анонимное сообщение' : this.item.fullname
  }
}
</script>

<style lang="sass">
@import './styles/index.scss'
</style>
