<template>
  <div class="watch-page">
    <Watch :online-users="onlineUsers" @on-is-online-stream="onIsOnlineSteam" />
    <ChatOnline v-if="isChatOnline" @on-online-users="onOnlineUsers" />
    <ChatOffline v-if="isChatOffline" />
  </div>
</template>

<script>
import Watch from './comp/watch'
import ChatOnline from '@/comp/chat/chat-online'
import ChatOffline from '@/comp/chat/chat-offline'
import { STREAM_STATE } from './fumc'
export default {
  name: 'watch-page',
  components: { Watch, ChatOnline, ChatOffline },
  data() {
    return {
      onlineUsers: 0,
      stateStream: STREAM_STATE.UNDEFINED,
      isChatOnline: false,
      isChatOffline: false
    }
  },
  methods: {
    onOnlineUsers(user) {
      this.onlineUsers = user
    },
    onIsOnlineSteam(isOnline) {
      if (isOnline) this.stateStream = STREAM_STATE.ONLINE
      else this.stateStream = STREAM_STATE.OFFLINE
    }
  },
  watch: {
    stateStream() {
      if (this.stateStream === STREAM_STATE.ONLINE) this.isChatOnline = true
      if (this.stateStream === STREAM_STATE.OFFLINE) this.isChatOffline = true
    }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
