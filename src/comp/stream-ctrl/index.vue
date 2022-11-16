<template>
  <StreamCtrl
    :name="name"
    :rtmp-server="rtmpServer"
    :stream-key="streamKey"
    @on-close="onClose"
    @on-end-stream="onEndStream"
  />
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import {
  GETTER_STREAM_CTRL,
  MUTATION_STREAM_CTRL,
  ACTION_AXIOS_BROADCAST
} from '@/store/const/type'
import StreamCtrl from './stream-ctrl/stream-ctrl'
export default {
  name: 'stream-ctrl',
  components: { StreamCtrl },
  data() {
    return {
      rtmpServer: 'rtmp://vidonline01.msk.mts.ru/live'
    }
  },
  methods: {
    ...mapMutations({ mutationStreamCtrlClose: MUTATION_STREAM_CTRL.CLOSE }),
    ...mapActions({ actionAxiosBroadcastPatch: ACTION_AXIOS_BROADCAST.PATCH }),
    onClose() {
      this.mutationStreamCtrlClose()
    },
    async onEndStream() {
      await this.actionAxiosBroadcastPatch(this.id)
      this.onClose()
    }
  },
  computed: {
    ...mapGetters({ getterStreamCtrlInfo: GETTER_STREAM_CTRL.INFO }),
    streamKey() {
      return this.getterStreamCtrlInfo.key
    },
    id() {
      return this.getterStreamCtrlInfo.id
    },
    name() {
      return this.getterStreamCtrlInfo.name
    }
  }
}
</script>
