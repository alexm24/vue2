<template>
  <ZoomPageId v-if="isZoomPageId" :item="item" />
</template>

<script>
import ZoomPageId from './zoom-id'
import { getAxiosZoomById, getZoomObject } from './func'
export default {
  name: 'index',
  components: { ZoomPageId },
  data() {
    return {
      item: {}
    }
  },
  computed: {
    isZoomPageId() {
      const { email } = this.item
      return !!email
    }
  },
  async created() {
    const { id } = this.$route.params
    const { email, json } = await getAxiosZoomById(id)
    const isEmail = !!email
    if (!isEmail) return
    this.item = getZoomObject(json)
  }
}
</script>
