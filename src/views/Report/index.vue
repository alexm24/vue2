<template>
  <Report
    :broadcast-name="broadcastName"
    :broadcast-msg="broadcastMsg"
    :broadcast-user="broadcastUser"
  />
</template>

<script>
import Report from './report'
import { getAxiosMsg, getAxiosParticipants, getAxiosBroadcast } from './func'
export default {
  name: 'index-report',
  components: { Report },
  data() {
    return {
      id: this.$route.params.id,
      broadcastMsg: [],
      broadcastUser: [],
      broadcastName: ''
    }
  },
  async created() {
    this.broadcastMsg = await getAxiosMsg(this.id)
    this.broadcastUser = await getAxiosParticipants(this.id)
    const name = await getAxiosBroadcast(this.id)
    this.broadcastName = `${name}.xlsx`
  }
}
</script>
