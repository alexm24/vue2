<template>
  <div class="chat-block-down">
    <button @click="$emit('on-btn-down')">
      <ArrowDown />
    </button>
  </div>
</template>

<script>
import ArrowDown from '@/pic/svg/arrow-down'
export default {
  name: 'chat-btn-down',
  components: { ArrowDown }
}
</script>

<style lang="sass">
@import './styles/index.scss'
</style>
