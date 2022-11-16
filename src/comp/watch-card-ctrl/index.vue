<template>
  <WatchCardCtrl
    @on-setting="onSetting"
    @on-copy-link="onCopyLink"
    @on-edit="onEdit"
    @on-delete="onDelete"
    @on-report="onReport"
    :life-cycle="lifeCycle"
  />
</template>

<script>
import { mapMutations } from 'vuex'
import { MUTATION_STREAM_CTRL, MUTATION_WATCH_CARD_DEL } from '@/store/const/type'
import WatchCardCtrl from './watch-card-ctrl'
import { APP_ROUTE } from '@/const'
export default {
  name: 'watch-card-ctl',
  components: { WatchCardCtrl },
  props: {
    id: { type: String },
    name: { type: String },
    streamKey: { type: String },
    lifeCycle: { type: Symbol }
  },
  methods: {
    ...mapMutations({
      mutationStreamCtrlOpen: MUTATION_STREAM_CTRL.OPEN,
      mutationWatchCardDelOpen: MUTATION_WATCH_CARD_DEL.OPEN
    }),
    onDelete() {
      this.mutationWatchCardDelOpen({ id: this.id, name: this.name, mode: this.lifeCycle })
    },
    onCopyLink() {
      const link = `${window.location.origin}/${APP_ROUTE.WATCH}/${this.id}`
      navigator.clipboard.writeText(link).catch((err) => console.log(err))
    },
    onEdit() {
      this.$router.push(`/${APP_ROUTE.BROADCAST}/${this.id}`)
    },
    onSetting() {
      this.mutationStreamCtrlOpen({ id: this.id, name: this.name, key: this.streamKey })
    },
    onReport() {
      this.$router.push(`/${APP_ROUTE.REPORT}/${this.id}`)
    }
  }
}
</script>
