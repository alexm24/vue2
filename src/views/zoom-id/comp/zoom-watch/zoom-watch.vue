<template>
  <div class="zoom-watch">
    <Player v-if="isPlayer" :path="file.path" />
    <Audio v-if="isAudio" :path="file.path" />
    <Chat v-if="isChat" :path="file.path" />
    <div class="zoom-watch-footer">
      <h2>{{ topic }}</h2>
    </div>
  </div>
</template>

<script>
import Player from './comp/player/player'
import Audio from './comp/audio/audio'
import Chat from './comp/chat/chat'
export default {
  name: 'zoom-watch',
  components: { Player, Audio, Chat },
  props: {
    topic: { type: String },
    file: { type: Object }
  },
  computed: {
    isPlayer() {
      return this.file.type === 'MP4'
    },
    isAudio() {
      return this.file.type === 'M4A'
    },
    isChat() {
      return this.file.type === 'CHAT'
    }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
