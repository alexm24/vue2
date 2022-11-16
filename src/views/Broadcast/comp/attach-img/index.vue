<template>
  <div class="attach-file">
    <span>Заставка</span>
    <label for="upload-img">
      <span>Выберите файл</span>
      <input
        type="file"
        id="upload-img"
        accept="image/png, image/jpeg"
        placeholder="Введите название"
        @change="onChange"
      />
    </label>
    <span>Файл объемом не более 1 МБ в форматах jpeg, jpg, png.</span>
    <PanelFile :file-list="stateFileList" @click-file="changeFile" />
    <PanelFile :file-list="uploadFile" @click-file="$emit('change-img-del', $event)" />
  </div>
</template>

<script>
import PanelFile from '@/comp/panel-file'
import { addFileList, delFileList } from '../../func'
export default {
  name: 'attach-img',
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
    onChange({ target }) {
      const { files } = target
      // TODO msg if 1M admin page
      if (!files) return
      const file = files[0]
      if (file.size < 1050000) {
        this.stateFileList = addFileList(files, null)
        this.$emit('change-img-file', file)
      }
      target.value = ''
    },
    changeFile(i) {
      this.stateFileList = delFileList(i, this.stateFileList)
    }
  }
}
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
