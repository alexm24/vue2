<template>
  <div class="panel-file" v-if="isFileList">
    <div
      class="file"
      v-for="(file, i) in fileList"
      :key="file.name"
      @click.stop="mode && $emit('click-file', i)"
    >
      <div class="svg-upload-file">
        <IconFile :mime="file.type" />
      </div>
      <div class="file-info">
        <div class="file-info-name">
          <span>{{ getFileName(file.name) }}</span>
          <span>{{ getFileExt(file.name) }}</span>
        </div>
        <span>{{ getFormatSize(file.size) }}</span>
      </div>
      <button @click.stop="$emit('click-file', i)" v-if="!mode">
        <DeleteFile />
      </button>
    </div>
  </div>
</template>

<script>
import IconFile from '@/pic/icon-file/IconFile'
import DeleteFile from '@/pic/svg/delete-file'
import { getFormatSize, getFileName, getFileExt } from '../utils'

export default {
  name: 'panel-file',
  props: {
    fileList: {
      type: [FileList, Object],
      default: undefined
    },
    mode: {
      type: Boolean,
      default: false
    }
  },
  components: { IconFile, DeleteFile },
  computed: {
    isFileList() {
      if (!this.fileList) return false
      return Object.keys(this.fileList).length > 0
    }
  },
  methods: {
    getFormatSize(size) {
      return getFormatSize(size)
    },
    getFileName(name) {
      return getFileName(name)
    },
    getFileExt(name) {
      return getFileExt(name)
    }
  }
}
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
