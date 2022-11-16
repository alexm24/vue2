<template>
  <div class="chat">
    <ChatHeader :menu-sel="menuSel" @on-menu-sel="menuSel = $event" />
    <ChatList :items="chatItems" :username="username" title="Добро пожаловать в чат трансляции" />
    <ChatInput @on-send-msg="onSendMsg" @on-is-anon="onIsAnon" />
  </div>
</template>

<script>
import ChatHeader from '../comp/chat-header'
import ChatList from '../comp/chat-list/chat-list'
import ChatInput from '../comp/chat-input/chat-input'
import { CHAT, getSortChartList } from '@/comp/chat/func'
export default {
  name: 'chat-online',
  components: { ChatHeader, ChatList, ChatInput },
  props: {
    chatList: { type: Object },
    username: { type: String }
  },
  data() {
    return {
      menuSel: CHAT.ALL
    }
  },
  computed: {
    chatItems() {
      if (this.menuSel === CHAT.ALL) return this.chatList
      return getSortChartList(this.chatList)
    }
  },
  methods: {
    onSendMsg(msg) {
      this.$emit('on-send-msg', msg)
    },
    onIsAnon(isAnon) {
      this.$emit('on-is-anon', isAnon)
    }
  }
}
</script>
