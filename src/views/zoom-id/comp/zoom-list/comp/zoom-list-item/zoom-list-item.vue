<template>
  <div
    v-if="!!name"
    class="zoom-list-item"
    :class="{ 'zoom-list-item--active': isShow }"
    @click.stop="$emit('select-item', index)"
  >
    <div class="zoom-item-type">
      <IconFile :mime="type" />
    </div>
    <div class="zoom-item-info">
      <span>{{ name }}</span>
      <span>{{ getFormatSize(size) }}</span>
    </div>
    <div class="zoom-item-ctrl">
      <button title="скачать" @click.stop="onClickDownload(path, name)">
        <CloudDownload />
      </button>
    </div>
  </div>
</template>

<script>
import IconFile from '@/pic/icon-file/IconFile'
import CloudDownload from '@/pic/svg/cloud-download'
import { getFormatSize } from '@/comp/utils'
export default {
  name: 'zoom-list-item',
  components: { IconFile, CloudDownload },
  props: {
    index: { type: Number },
    type: { type: String },
    path: { type: String },
    size: { type: Number },
    name: { type: String },
    isShow: { type: Boolean }
  },
  methods: {
    getFormatSize(size) {
      return getFormatSize(size)
    },
    onClickDownload(path, name) {
      const el = document.createElement('a')
      el.setAttribute('href', path)
      el.setAttribute('download', name)
      document.body.appendChild(el)
      el.click()
      el.remove()
    }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
