<template>
  <div class="watch">
    <Player v-if="true" :stream-key="streamKey" />
    <Footer :name="channel" :online-users="onlineUsers" />
  </div>
</template>

<script>
import Player from '@/comp/player'
import Footer from './comp/footer'
export default {
  name: 'page-stream',
  components: { Player, Footer },
  props: {
    streamKey: { type: String },
    onlineUsers: { type: Number, default: 0 },
    channel: { type: String, default: '' }
  }
}
</script>
