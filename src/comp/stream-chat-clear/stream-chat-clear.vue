<template>
  <div class="watch-card-del">
    <header>
      <h4>Подтвердите очиску чата</h4>
      <button @click="$emit('on-close')">
        <Close />
      </button>
    </header>
    <main>
      <span>Если очистить чат, то вы не сможете восстановить</span>
    </main>
    <footer>
      <button @click="$emit('on-clear-chat')">Подтвердить</button>
    </footer>
  </div>
</template>

<script>
import Close from '@/pic/svg/close'
export default {
  name: 'watch-card-del',
  components: { Close }
}
</script>

<style lang="scss">
@import './styles';
</style>
