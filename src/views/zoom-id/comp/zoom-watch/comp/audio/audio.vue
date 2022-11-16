<template>
  <div class="zoom-audio">
    <audio :src="path" type="audio/x-m4a" controls autoplay />
  </div>
</template>

<script>
export default {
  name: 'audio-player',
  props: {
    path: { type: String }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
