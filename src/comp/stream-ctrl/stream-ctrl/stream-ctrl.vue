<template>
  <div class="stream-ctrl">
    <header>
      <h4>
        Управление вещанием: <span>{{ name }}</span>
      </h4>
      <button @click="$emit('on-close')">
        <Close />
      </button>
    </header>
    <main class="copy-block">
      <section>
        <span>Адрес для отправки потока</span>
        <input type="text" :readonly="true" :value="rtmpServer" ref="inputRtmpServer" />
        <button title="скопировать адрес потока в буфер обмена" @click="copy(false)">
          <ContentCopy />
        </button>
      </section>
      <section>
        <span>Ключ потока</span>
        <input type="text" :readonly="true" :value="streamKey" ref="inputStreamKey" />
        <button title="скопировать ключ в буфер обмена" @click="copy(true)"><ContentCopy /></button>
      </section>
    </main>
    <footer>
      <button @click="$emit('on-end-stream')">Завершить трансляцию</button>
    </footer>
  </div>
</template>

<script>
import Close from '@/pic/svg/close'
import ContentCopy from '@/pic/svg/content-copy'
export default {
  name: 'stream-ctrl',
  components: { Close, ContentCopy },
  props: {
    name: { type: String },
    rtmpServer: { type: String },
    streamKey: { type: String }
  },
  methods: {
    copy(flag) {
      let copyTxt = ''
      if (flag) {
        copyTxt = this.streamKey
        this.$refs.inputStreamKey.focus()
        this.$refs.inputStreamKey.select()
      } else {
        copyTxt = this.rtmpServer
        this.$refs.inputRtmpServer.focus()
        this.$refs.inputRtmpServer.select()
      }
      navigator.clipboard.writeText(copyTxt).catch((err) => console.log(err))
    }
  }
}
</script>

<style lang="scss">
@import 'styles/index';
</style>
