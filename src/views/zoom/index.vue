<template>
  <Zoom :conference="conference" />
</template>

<script>
import { mapGetters } from 'vuex'
import Zoom from './zoom'
import { getAxiosZoomByEmail } from './func'
import { GETTER_APP } from '@/store/const/type'
export default {
  name: 'index-zoom-page',
  components: { Zoom },
  data() {
    return {
      conference: []
    }
  },
  computed: {
    ...mapGetters({ user: GETTER_APP.USER })
  },
  async created() {
    const { email } = this.user
    this.conference = await getAxiosZoomByEmail(email)
  }
}
</script>
