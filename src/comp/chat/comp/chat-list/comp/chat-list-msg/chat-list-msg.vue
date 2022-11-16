<template>
  <div class="chat-list-msg" ref="chatList" @scroll="onScrollChat">
    <span>{{ title }}</span>
    <ChartListItem v-for="item in items" :key="item.id" :item="item" :username="username" />
  </div>
</template>

<script>
import ChartListItem from '../chat-list-item/chat-list-item'
import { setScrollEnd, debounce, getIsScrollBottom, scrollListEnd } from './func'
export default {
  name: 'chat-list-msg',
  components: { ChartListItem },
  props: {
    items: { type: Object },
    title: { type: String },
    username: { type: String }
  },

  data() {
    return {
      isScrollBottom: true
    }
  },

  methods: {
    onScrollChat() {
      this.debounceScroll(this.$refs.chatList)
    }
  },

  mounted() {
    // scroll event with delay 200 ms
    this.debounceScroll = debounce((el) => {
      const isScrollBottom = getIsScrollBottom(el)
      this.isScrollBottom = isScrollBottom
      this.$emit('on-is-scroll-bottom', isScrollBottom)
    }, 200)

    // listen event 'on-root-chat-list-btn-down' set scroll to end
    this.$root.$on('on-root-chat-list-btn-down', () => setScrollEnd(this.$refs.chatList))

    // listen event Mutation chat-list
    let observer = new MutationObserver(() => {
      // sets the scroll to the end if the message is custom
      // or the scroll position is at the end otherwise do nothing
      scrollListEnd(this.$refs.chatList, this.items, this.username, this.isScrollBottom)
    })
    observer.observe(this.$refs.chatList, { childList: true })
  },

  destroyed() {
    this.$root.$off('on-root-chat-list-btn-down')
  }
}
</script>

<style lang="sass">
@import './styles/index.scss'
</style>
