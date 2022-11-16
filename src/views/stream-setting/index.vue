<template>
  <StreamSetting
    v-if="!!streamKey"
    :rtmp="rtmp"
    :link="link"
    :stream-key="streamKey"
    :username="username"
    :desc="desc"
  />
</template>

<script>
import { mapGetters } from 'vuex'
import { GETTER_APP } from '@/store/const/type'
import StreamSetting from './stream-setting'
import { postAxiosStream } from './func'
import { APP_ROUTE } from '@/const/URL'
import { router } from '@/plugins'
export default {
  name: 'index-page-stream-setting',
  components: { StreamSetting },
  data() {
    return {
      rtmp: 'rtmp://vidonline01.msk.mts.ru/live',
      streamKey: '',
      link: '',
      username: '',
      desc: ''
    }
  },
  computed: {
    ...mapGetters({ user: GETTER_APP.USER })
  },
  async created() {
    const userId = this.$route.params.id
    const { username } = this.user
    if (userId !== username) await router.push('/')
    if (!username) await router.push('/')
    this.username = username
    const stream = await postAxiosStream(username)
    this.desc = stream.description
    const isId = !!stream.id
    const isUsername = !!stream.username
    if (!(isId && isUsername)) await router.push('/')
    else {
      this.streamKey = stream.id
      this.link = `${window.location.origin}/${APP_ROUTE.STREAM}/${stream.username.trim()}`
    }
  }
}
</script>
