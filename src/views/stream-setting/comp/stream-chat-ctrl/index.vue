<template>
  <StreamChatCtrl :username="username" @on-clear-chat="onClearChat" />
</template>

<script>
import { mapMutations } from 'vuex'
import { MUTATION_STREAM_CHAT_CLEAR } from '@/store/const/type'
import StreamChatCtrl from './stream-chat-ctrl'
export default {
  name: 'index-stream-chat-ctrl',
  components: { StreamChatCtrl },
  props: {
    username: { type: String }
  },
  methods: {
    ...mapMutations({ mutationStreamChatClearOpen: MUTATION_STREAM_CHAT_CLEAR.OPEN }),
    onClearChat() {
      this.mutationStreamChatClearOpen(this.username)
    }
  }
}
</script>
