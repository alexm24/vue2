<template>
  <div class="editor-footer">
    <div class="footer-ctrl">
      <mts-checkbox :value="isQuestion" @input="$emit('on-click-is-question')"
        >Отметить как вопрос</mts-checkbox
      >
      <button>
        <Help />
        <span>Отметка помогает спикеру не пропустить ваш вопрос.</span>
      </button>
    </div>
    <div class="footer-ctrl">
      <mts-toggle :value="isAnon" @input="$emit('on-click-is-anon')">Анонимный режим</mts-toggle>
      <button>
        <Help />
        <span>Ваши сообщения в чате будут анонимными.</span>
      </button>
    </div>
  </div>
</template>

<script>
import Help from '@/pic/svg/help'
export default {
  name: 'chat-editor-footer',
  components: { Help },
  props: {
    isQuestion: { type: Boolean },
    isAnon: { type: Boolean }
  }
}
</script>

<style lang="sass">
@import './styles/index.scss'
</style>
