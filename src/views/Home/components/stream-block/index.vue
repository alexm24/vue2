<template>
  <div class="streams">
    <Stream
      :streams="futureBroadcast"
      :user="user.username"
      :is-admin="isAdmin"
      :life-cycle="lifeCycleFuture"
    />
    <h2 v-if="isPastBroadcast">Прошедшие трансляции</h2>
    <Stream
      :streams="pastBroadcast"
      :user="user.username"
      :is-admin="isAdmin"
      :life-cycle="lifeCyclePast"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { GETTER_APP, GETTER_BROADCAST, ACTION_AXIOS_BROADCAST } from '@/store/const/type'
import { LIFE_CYCLE } from '@/const'
import Stream from './comp/stream/stream'
export default {
  name: 'stream-block-index',
  components: { Stream },
  methods: {
    ...mapActions({
      getAxiosBroadcast: ACTION_AXIOS_BROADCAST.GET,
      postAxiosUserGetBroadcastArch: ACTION_AXIOS_BROADCAST.POST_GET_ARCH
    })
  },
  data() {
    return {
      lifeCycleFuture: LIFE_CYCLE.FUTURE,
      lifeCyclePast: LIFE_CYCLE.PAST
    }
  },
  computed: {
    ...mapGetters({
      futureBroadcast: GETTER_BROADCAST.FUTURE,
      pastBroadcast: GETTER_BROADCAST.PAST,
      user: GETTER_APP.USER,
      isAdmin: GETTER_APP.IS_ADMIN
    }),
    isPastBroadcast() {
      return Object.keys(this.pastBroadcast).length
    }
  },
  created() {
    this.getAxiosBroadcast()
    const { username } = this.user
    if (!username) return
    this.postAxiosUserGetBroadcastArch(username)
  }
}
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
