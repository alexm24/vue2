<template>
  <WatchCardDel :name="name" @on-close="onClose" @on-delete="onDelete" />
</template>

<script>
import { mapGetters } from 'vuex'
import WatchCardDel from './watch-card-del'
import { mapActions, mapMutations } from 'vuex'
import {
  ACTION_AXIOS_BROADCAST,
  MUTATION_WATCH_CARD_DEL,
  GETTER_WATCH_CARD_DEL
} from '@/store/const/type'
export default {
  name: 'index-watch-card-del',
  components: { WatchCardDel },
  methods: {
    ...mapActions({ axiosBroadcastDelId: ACTION_AXIOS_BROADCAST.DEL_ID }),
    ...mapMutations({ mutationWatchCardDelClose: MUTATION_WATCH_CARD_DEL.CLOSE }),
    onDelete() {
      this.axiosBroadcastDelId({ id: this.id, mode: this.mode })
      this.mutationWatchCardDelClose()
    },
    onClose() {
      this.mutationWatchCardDelClose()
    }
  },
  computed: {
    ...mapGetters({ getterWatchCardDelInfo: GETTER_WATCH_CARD_DEL.INFO }),
    id() {
      return this.getterWatchCardDelInfo.id
    },
    name() {
      return this.getterWatchCardDelInfo.name
    },
    mode() {
      return this.getterWatchCardDelInfo.mode
    }
  }
}
</script>
