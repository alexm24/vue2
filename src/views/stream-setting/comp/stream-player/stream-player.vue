<template>
  <div class="stream-player-box">
    <h2>Превью стрима</h2>
    <div class="stream-player">
      <Player v-if="true" :stream-key="streamKey" />
    </div>
    <div class="stream-player-footer">
      <ul class="watch-folder-info">
        <li class="person-online" v-if="onlineUsers">
          <Person />
          <span>{{ onlineUsers }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Player from '@/comp/player'
import Person from '@/pic/svg/person'
export default {
  name: 'stream-setting-player',
  props: {
    onlineUsers: { type: Number },
    streamKey: { type: String }
  },
  components: { Player, Person }
}
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
