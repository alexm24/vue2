<template>
  <div class="watch-card">
    <WatchCardCtrl
      v-if="isWatchCtrl"
      :id="id"
      :name="name"
      :stream-key="streamKey"
      :life-cycle="lifeCycle"
    />
    <header>
      <img class="watch-card-img" :src="previewUrl" alt="" />
    </header>
    <main>
      <span :title="name">{{ name }}</span>
    </main>
    <Footer @on-show-desc="visible = $event" :description="description" :date="date" />
    <WatchDesc @on-close-desc="visible = false" :visible="visible" :desc="description" />
  </div>
</template>

<script>
import WatchCardCtrl from '@/comp/watch-card-ctrl'
import WatchDesc from '@/comp/watch-desc'
import Footer from './comp/footer'
export default {
  name: 'watch-card',
  components: { WatchCardCtrl, WatchDesc, Footer },
  props: {
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    streamKey: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: new Date().toISOString()
    },
    previewUrl: {
      type: String,
      default: ''
    },
    isWatchCtrl: {
      type: Boolean,
      default: true
    },
    lifeCycle: { type: Symbol }
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss">
@import 'styles/index';
</style>
