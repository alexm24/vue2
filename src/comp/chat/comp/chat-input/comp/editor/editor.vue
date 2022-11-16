<template>
  <div class="editor" :class="{ 'input-msg--focus': isFocusInput }">
    <input
      type="text"
      v-model="text"
      @keyup.enter="sendMsg"
      @focus="isFocusInput = true"
      @blur="isFocusInput = false"
      @keydown="onKeydownInput"
    />
    <button @click="sendMsg">
      <Send />
    </button>
  </div>
</template>

<script>
import Send from '@/pic/svg/send'
export default {
  name: 'chat-editor',
  components: { Send },
  data() {
    return {
      text: '',
      isFocusInput: false
    }
  },
  methods: {
    sendMsg() {
      if (!this.text) return
      this.$emit('on-send-text', this.text)
      this.text = ''
    },
    onKeydownInput({ key }) {
      if (!key) return
      if (key === '?') this.$emit('on-pressed-question')
    }
  }
}
</script>

<style lang="sass">
@import './styles/index.scss'
</style>
