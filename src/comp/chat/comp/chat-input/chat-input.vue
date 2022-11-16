<template>
  <div class="chat-input">
    <Editor @on-send-text="onSendMsg" @on-pressed-question="onPressedQuestion" />
    <Footer
      :is-question="isQuestion"
      :is-anon="isAnon"
      @on-click-is-question="onClickIsQuestion"
      @on-click-is-anon="onClickIsAnon"
    />
  </div>
</template>

<script>
import Editor from './comp/editor/editor'
import Footer from './comp/footer/footer'
export default {
  name: 'chat-input',
  components: { Editor, Footer },
  data() {
    return {
      isAnon: false,
      isQuestion: false
    }
  },
  methods: {
    onSendMsg(text) {
      if (!text) return
      this.$emit('on-send-msg', { text, is_question: this.isQuestion, is_anon: this.isAnon })
      if (this.isQuestion) this.isQuestion = false
    },
    onClickIsQuestion() {
      this.isQuestion = !this.isQuestion
    },
    onClickIsAnon() {
      this.isAnon = !this.isAnon
    },
    onPressedQuestion() {
      this.isQuestion = true
    }
  },
  watch: {
    isAnon(isAnon) {
      this.$emit('on-is-anon', isAnon)
    }
  }
}
</script>

<style lang="sass">
@import './styles/index.scss'
</style>
