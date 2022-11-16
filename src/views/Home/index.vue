<template>
  <div class="home">
    <BroadcastBlock />
    <LiveBlock />
  </div>
</template>
<script>
import BroadcastBlock from './components/stream-block/'
import LiveBlock from './components/live-block/'
export default {
  name: 'home',
  components: { LiveBlock, BroadcastBlock }
}
</script>
<style lang="scss">
@import './styles/index.scss';
</style>
