<template>
  <div class="stream">
    <router-link
      v-for="stream in streams"
      :key="stream.id"
      :to="`/${APP_ROUTE.WATCH}/${stream.id}`"
      class="stream-link"
    >
      <WatchCard
        :id="stream.id"
        :name="stream.name"
        :stream-key="stream.stream_key"
        :description="stream.description"
        :date="stream.start_time"
        :preview-url="getImage(stream.preview_url)"
        :is-watch-ctrl="isWatchCardCtrl(stream.owner)"
        :life-cycle="lifeCycle"
      />
    </router-link>
  </div>
</template>

<script>
import { APP_ROUTE } from '@/const'
import WatchCard from '@/comp/watch-card'

export default {
  name: 'stream',
  components: { WatchCard },
  props: {
    streams: { type: Object },
    user: { type: String },
    isAdmin: { type: Boolean },
    lifeCycle: { type: Symbol }
  },
  data() {
    return {
      APP_ROUTE
    }
  },
  methods: {
    getImage(path) {
      const pathDefault = '/default.png'
      if (!path) return pathDefault
      if (path.length === 0) return pathDefault
      return `/${path}`
    },
    isWatchCardCtrl(owner) {
      if (this.isAdmin) return true
      return owner === this.user
    }
  }
}
</script>
