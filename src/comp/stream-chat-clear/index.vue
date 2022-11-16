<template>
  <StreamChatClear @on-close="onClose" @on-clear-chat="onClearChat" />
</template>

<script>
import { mapGetters } from 'vuex'
import { deleteAxiosClearChat } from './func'
import StreamChatClear from './stream-chat-clear'
import { mapMutations } from 'vuex'
import { MUTATION_STREAM_CHAT_CLEAR, GETTER_STREAM_CHAT_CLEAR } from '@/store/const/type'
export default {
  name: 'index-stream-chat-clear',
  components: { StreamChatClear },
  methods: {
    ...mapMutations({ mutationStreamChatClose: MUTATION_STREAM_CHAT_CLEAR.CLOSE }),
    async onClearChat() {
      await deleteAxiosClearChat(this.channel)
      await this.mutationStreamChatClose()
    },
    onClose() {
      this.mutationStreamChatClose()
    }
  },
  computed: {
    ...mapGetters({ getterStreamChatClearChannel: GETTER_STREAM_CHAT_CLEAR.CHANNEL }),
    channel() {
      return this.getterStreamChatClearChannel
    }
  }
}
</script>
