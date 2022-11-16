<template>
  <mts-dialog :visible="visible" title="Описание" @close="$emit('on-close-desc')">
    <span>{{ desc }}</span>
  </mts-dialog>
</template>

<script>
export default {
  name: 'watch-desc',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>
