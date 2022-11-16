<template>
  <div class="chat-list">
    <ChatListMsg
      :items="items"
      :title="title"
      :username="username"
      @on-is-scroll-bottom="isScrollBottom = $event"
    />
    <ChatBtnDown v-if="!isScrollBottom" @on-btn-down="onBtnDown" />
    <div class="chat-list-footer-empty" />
  </div>
</template>

<script>
import ChatListMsg from './comp/chat-list-msg/chat-list-msg'
import ChatBtnDown from './comp/chat-btn-down/chat-btn-down'
export default {
  name: 'chat-list',
  components: { ChatListMsg, ChatBtnDown },
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
    onBtnDown() {
      this.$root.$emit('on-root-chat-list-btn-down')
    }
  }
}
</script>

<style lang="sass">
@import './styles/index.scss'
</style>
