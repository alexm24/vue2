<template>
  <div class="watch-page" v-if="!!streamKey">
    <Stream :online-users="onlineUsers" :stream-key="streamKey" :channel="channel" />
    <ChatOnline v-if="true" @on-online-users="onOnlineUsers" />
  </div>
</template>

<script>
import ChatOnline from '@/comp/chat/chat-online'
import Stream from './stream'
import { getAxiosStream } from './func'
export default {
  name: 'index-page-stream',
  components: { Stream, ChatOnline },
  data() {
    return {
      streamKey: '',
      channel: '',
      onlineUsers: 0
    }
  },
  methods: {
    onOnlineUsers(user) {
      this.onlineUsers = user
    }
  },
  async created() {
    const param = this.$route.params.id
    const { id, description } = await getAxiosStream(param)
    this.streamKey = id
    this.channel = description
  }
}
</script>
