<template>
  <div class="attach-file">
    <span>Вложения</span>
    <label for="upload-files">
      <input
        id="upload-files"
        type="file"
        placeholder="Введите название"
        @change="changeFile"
        multiple
      />
      <span>Выберите файлы</span>
    </label>
    <span>Файлы объемом не более 25 МБ.</span>
    <PanelFile :file-list="stateFileList" @click-file="onChangeFile" />
    <PanelFile :file-list="uploadFile" @click-file="$emit('change-attach-del', $event)" />
  </div>
</template>

<script>
import PanelFile from '@/comp/panel-file'
import { addFileList, delFileList } from '../../func'

export default {
  name: 'attach-file',
  props: {
    uploadFile: {
      type: Object,
      default: null
    }
  },
  components: { PanelFile },
  data() {
    return {
      stateFileList: null
    }
  },
  methods: {
    changeFile({ target }) {
      this.stateFileList = addFileList(target.files, this.stateFileList)
      target.value = ''
    },
    onChangeFile(i) {
      this.stateFileList = delFileList(i, this.stateFileList)
    }
  },
  watch: {
    stateFileList() {
      this.$emit('change-attach-file', this.stateFileList)
    }
  }
}
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
