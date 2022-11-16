<template>
  <div class="live">
    <div class="player" />
    <LiveFooter :place="place" :desc="desc" />
  </div>
</template>
<script>
import LiveFooter from './comp/live-footer'
import { getAxiosLive } from './func'
export default {
  name: 'live',
  components: { LiveFooter },
  data() {
    return {
      place: '',
      desc: ''
    }
  },
  methods: {
    setLive(place, desc) {
      this.place = place
      this.desc = desc
    }
  },
  mounted() {
    const id = this.$route.params.id
    const elDiv = document.getElementsByClassName('player')[0]
    getAxiosLive(id, elDiv, this.setLive)
  }
}
</script>
<style lang="scss">
@import url('./styles/index.scss');
</style>
