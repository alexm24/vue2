<template>
  <div class="live-footer mts-container">
    <span>{{ place }}</span>
    <span>{{ desc }}</span>
  </div>
</template>

<script>
export default {
  name: 'live-footer',
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
@import './styles/index.scss';
</style>
