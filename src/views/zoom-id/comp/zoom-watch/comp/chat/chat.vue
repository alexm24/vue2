<template>
  <pre class="zoom-chat">{{ chat }}</pre>
</template>

<script>
import { getAxiosZoomChat } from './func'
export default {
  name: 'zoom-chat',
  props: {
    path: { type: String }
  },
  data() {
    return {
      chat: ''
    }
  },
  async created() {
    this.chat = await getAxiosZoomChat(this.path)
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
