<template>
  <div class="stream-panel">
    <h3>{{ title }}</h3>
    <main class="copy-block">
      <section v-if="items.title1">
        <span>{{ items.title1 }}</span>
        <input type="text" :readonly="true" :value="items.value1" ref="inputField1" />
        <button title="скопировать URL rtmp в буфер обмена" @click="copy(false)">
          <ContentCopy />
        </button>
      </section>
      <section v-if="items.title2">
        <span>{{ items.title2 }}</span>
        <input type="text" :readonly="true" :value="items.value2" ref="inputField2" />
        <button title="скопировать ключ в буфер обмена" @click="copy(true)">
          <ContentCopy />
        </button>
      </section>
    </main>
  </div>
</template>

<script>
import ContentCopy from '@/pic/svg/content-copy'
export default {
  name: 'stream-panel',
  components: { ContentCopy },
  props: {
    title: { type: String, default: '' },
    items: { type: Object, default: null }
  },
  methods: {
    copy(flag) {
      let copyTxt = ''
      if (flag) {
        copyTxt = this.items.value2
        this.$refs.inputField2.focus()
        this.$refs.inputField2.select()
      } else {
        copyTxt = this.items.value1
        this.$refs.inputField1.focus()
        this.$refs.inputField1.select()
      }
      navigator.clipboard.writeText(copyTxt).catch((err) => console.log(err))
    }
  }
}
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
