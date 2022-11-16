<template>
  <mts-dialog :visible="visible" title="Вложения к трансляции" @close="$emit('close-panel')">
    <PanelFile :file-list="attachFile" @click-file="onClickFile" :mode="true" />
  </mts-dialog>
</template>

<script>
import PanelFile from '@/comp/panel-file'
import { API_URL } from '@/const'
export default {
  name: 'panel-attach',
  components: { PanelFile },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    attachFile: {
      type: Object,
      default: null
    }
  },
  methods: {
    onClickFile(id) {
      window.location.href = `${API_URL.FILE}/${id}/download`
    }
  }
}
</script>

<style lang="scss">
@import 'styles/index';
</style>
