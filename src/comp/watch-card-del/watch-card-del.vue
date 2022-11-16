<template>
  <div class="watch-card-del">
    <header>
      <h4>Подтвердите удаление</h4>
      <button @click="$emit('on-close')">
        <Close />
      </button>
    </header>
    <main>
      <span>Вы уверены что хотите удалить: </span>
      <strong>{{ name }}</strong>
    </main>
    <footer>
      <button @click="$emit('on-delete')">Подтвердить</button>
    </footer>
  </div>
</template>

<script>
import Close from '@/pic/svg/close'
export default {
  name: 'watch-card-del',
  components: { Close },
  props: {
    name: { type: String }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
