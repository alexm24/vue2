<template>
  <div class="help">
    <p>Напишите, что вы хотите улучшить или добавить, предложите свои идеи.</p>
    <p>Написать в службу поддержки.</p>
    <br />
    <mts-button theme="dark" @click="onClick">Написать</mts-button>
  </div>
</template>

<script>
export default {
  name: 'help',
  methods: {
    onClick() {
      window.open('https://mm.mts.ru/channel/vp.mts.ru.help', '_blank').focus()
    }
  }
}
</script>

<style lang="scss">
@import 'styles/index.scss';
</style>
