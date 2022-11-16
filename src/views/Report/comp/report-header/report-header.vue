<template>
  <ul class="report-header">
    <li :class="{ 'report-header-select': isSelChat }" @click="onClick(reportChat)">
      <span>Чат</span>
    </li>
    <li :class="{ 'report-header-select': isSelParticipant }" @click="onClick(reportParticipant)">
      <span>Участники</span>
    </li>
  </ul>
</template>

<script>
import { REPORT } from '../../func'
export default {
  name: 'report-header',
  data() {
    return {
      sel: REPORT.CHAT,
      reportChat: REPORT.CHAT,
      reportParticipant: REPORT.PARTICIPANT,
      isSelChat: true,
      isSelParticipant: false
    }
  },
  methods: {
    onClick(sel) {
      this.sel = sel
    }
  },
  watch: {
    sel() {
      if (this.sel === REPORT.CHAT) {
        this.isSelChat = true
        this.isSelParticipant = false
      } else {
        this.isSelChat = false
        this.isSelParticipant = true
      }
      this.$emit('on-sel-header', this.sel)
    }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
