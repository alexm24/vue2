<template>
  <ChatOffline :chat-list="chatList" :username="username" />
</template>

<script>
import { mapGetters } from 'vuex'
import { GETTER_APP } from '@/store/const/type'
import ChatOffline from './chat-offline'
import { getAxiosMsgBroadcastById } from './func'
export default {
  name: 'index-chat-offline',
  components: { ChatOffline },
  data() {
    return {
      chatList: {},
      channel: this.$route.params.id
    }
  },
  methods: {
    setStateChatList(chat) {
      this.chatList = chat
    }
  },
  computed: {
    ...mapGetters({ getGettersUser: GETTER_APP.USER }),
    username() {
      return this.getGettersUser.username
    }
  },
  created() {
    getAxiosMsgBroadcastById(this.channel, this.setStateChatList)
  }
}
</script>
