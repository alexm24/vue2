<template>
  <div class="zoom-page-id">
    <ZoomWatch :topic="item.topic" :file="file" />
    <ZoomList :files="item.files" @on-sel-item-file="onSelItemFile" />
  </div>
</template>

<script>
import ZoomWatch from './comp/zoom-watch/zoom-watch'
import ZoomList from './comp/zoom-list/zoom-list'
export default {
  name: 'Zoom-page-id',
  components: { ZoomWatch, ZoomList },
  props: {
    item: { type: Object }
  },
  data() {
    return {
      selItemFile: 0
    }
  },
  methods: {
    onSelItemFile(i) {
      this.selItemFile = i
    }
  },
  computed: {
    file() {
      return this.item.files[this.selItemFile]
    }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
