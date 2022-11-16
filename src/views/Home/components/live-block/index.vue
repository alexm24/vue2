<template>
  <div class="live-panel">
    <h2>Офисные столовые</h2>
    <router-link
      v-for="live in allLive"
      :key="live.id"
      :to="`/${APP_ROUTE.LIVE}/${live.id}`"
      class="live-link"
    >
      <LiveCard :place="live.place" :desc="live.description" />
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LiveCard from '../../../../comp/live-card'
import { ACTION_AXIOS_LIVE, GETTER_LIVE } from '@/store/const/type'
import { APP_ROUTE } from '@/const'
export default {
  name: 'live-block',
  components: { LiveCard },
  data() {
    return { APP_ROUTE }
  },
  methods: mapActions({ getAxiosLive: ACTION_AXIOS_LIVE.GET }),
  computed: mapGetters({ allLive: GETTER_LIVE.ALL }),
  created() {
    this.getAxiosLive()
  }
}
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
