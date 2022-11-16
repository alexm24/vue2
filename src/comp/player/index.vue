<template>
  <div class="player" />
</template>

<script>
import { URL } from '@/const'
import { PlayerWazd } from '@/comp/utils'
export default {
  name: 'index-player',
  props: {
    streamKey: { type: String }
  },
  mounted() {
    const elDiv = document.getElementsByClassName('player')[0]
    const videoSrc = `${URL.CDN_LIVE}/${this.streamKey}.m3u8`
    const player = PlayerWazd(videoSrc)
    elDiv.appendChild(player)
  }
}
</script>
