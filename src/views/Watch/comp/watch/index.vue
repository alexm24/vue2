<template>
  <div class="watch">
    <Player v-if="isPlayer" :stream-key="streamKey" />
    <div v-if="isPlayerEmpty" class="player-empty">
      <span>Трансляция завершена</span>
    </div>
    <Footer
      :name="name"
      :desc="desc"
      :date="date"
      :attachFile="attachFile"
      :online-users="onlineUsers"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { GETTER_APP } from '@/store/const/type'
import Player from '../../../../comp/player'
import Footer from './comp/footer'
import { getAxiosAttachFile } from '@/comp/utils'
import { getAxiosBroadcast, postAxiosParticipant } from './func'
export default {
  name: 'watch',
  components: { Footer, Player },
  props: {
    onlineUsers: { type: Number, default: 0 }
  },
  data() {
    return {
      id: this.$route.params.id,
      name: '',
      desc: '',
      date: new Date().toISOString(),
      attachFile: null,
      life: '',
      streamKey: '',
      isPlayer: false,
      isPlayerEmpty: false
    }
  },
  computed: mapGetters({ getterAppUser: GETTER_APP.USER }),
  methods: {
    setBroadcast(name, desc, dateTime, life, stream_key) {
      this.name = name
      this.desc = desc
      this.date = dateTime
      this.life = life
      this.streamKey = stream_key
    },
    setAttachFileLoaded(attachFile) {
      this.attachFile = attachFile
    }
  },
  watch: {
    life() {
      let isOnline = false
      if (this.life === 'created') {
        isOnline = true
        this.isPlayer = true
        postAxiosParticipant(this.id, this.getterAppUser)
      } else {
        this.isPlayerEmpty = true
      }
      this.$emit('on-is-online-stream', isOnline)
    }
  },
  mounted() {
    getAxiosBroadcast(this.id, this.setBroadcast)
    getAxiosAttachFile(this.id, this.setAttachFileLoaded)
  }
}
</script>
<style lang="scss">
@import './styles';
</style>
