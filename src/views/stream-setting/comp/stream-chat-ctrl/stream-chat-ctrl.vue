<template>
  <div class="stream-chat-ctrl">
    <nav>
      <h2>Управление чатом</h2>
    </nav>
    <main>
      <button @click="$emit('on-clear-chat')">Очистить чат</button>
    </main>
  </div>
</template>

<script>
export default {
  name: 'stream-chat-ctrl',
  props: {
    username: { type: String }
  }
}
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
