<template>
  <div class="card-live">
    <div class="live-place">{{ place }}</div>
    <div class="live-desc">{{ desc }}</div>
  </div>
</template>

<script>
export default {
  name: 'card-live',
  props: {
    place: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import 'styles/index';
</style>
