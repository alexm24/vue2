<template>
  <div class="chat">
    <ChatHeader :menu-sel="menuSel" @on-menu-sel="menuSel = $event" />
    <ChatList :items="chatItems" :username="username" title="Архив чата трансляции" />
    <div class="empty-block" />
  </div>
</template>

<script>
import ChatHeader from '@/comp/chat/comp/chat-header'
import ChatList from '@/comp/chat/comp/chat-list/chat-list'
import { CHAT, getSortChartList } from '@/comp/chat/func'
export default {
  name: 'chat-offline',
  components: { ChatHeader, ChatList },
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
  }
}
</script>
<style lang="scss">
@import './styles';
</style>
