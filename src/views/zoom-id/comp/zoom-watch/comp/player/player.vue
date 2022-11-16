<template>
  <div class="zoom-watch-player">
    <div class="player" />
  </div>
</template>

<script>
import { PlayerWazd } from '@/comp/utils'

export default {
  name: 'zoom-watch-player',
  props: {
    path: { type: String }
  },
  mounted() {
    const elDiv = document.getElementsByClassName('player')[0]
    const videoSrc = this.path
    const player = PlayerWazd(videoSrc)
    elDiv.appendChild(player)
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
