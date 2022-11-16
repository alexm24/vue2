<template>
  <div class="stream-panel">
    <h3>{{ title }}</h3>
    <main class="copy-block">
      <section>
        <span>{{ label }}</span>
        <input type="text" :readonly="true" :value="value" ref="inputField" />
        <button title="скопировать ссылку в буфер обмена" @click="copy"><ContentCopy /></button>
        <button title="переход по ссылке в новой вкладке" @click="forward"><ArrowForward /></button>
      </section>
    </main>
  </div>
</template>

<script>
import ContentCopy from '@/pic/svg/content-copy'
import ArrowForward from '@/pic/svg/arrow-forward'
export default {
  name: 'panel-link',
  components: { ContentCopy, ArrowForward },
  props: {
    title: { type: String, default: '' },
    label: { type: String, default: '' },
    value: { type: String, default: '' }
  },
  methods: {
    copy() {
      this.$refs.inputField.focus()
      this.$refs.inputField.select()
      navigator.clipboard.writeText(this.value).catch((err) => console.log(err))
    },
    forward() {
      this.$refs.inputField.focus()
      this.$refs.inputField.select()
      window.open(this.value, '_blank').focus()
    }
  }
}
</script>
