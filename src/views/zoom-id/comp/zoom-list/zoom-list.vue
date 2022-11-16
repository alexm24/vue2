<template>
  <div class="zoom-list">
    <header>
      <span>Файлы зоом конференции</span>
    </header>
    <ZoomListItem
      v-for="(item, i) in files"
      :key="i"
      :index="i"
      :type="item.type"
      :path="item.path"
      :size="item.size"
      :name="item.name"
      :is-show="getIsShow(i, selItem)"
      @select-item="onSelItem"
    />
  </div>
</template>

<script>
import ZoomListItem from './comp/zoom-list-item/zoom-list-item'
export default {
  name: 'zoom-list',
  components: { ZoomListItem },
  props: {
    files: { type: Array }
  },
  data() {
    return {
      selItem: 0
    }
  },
  methods: {
    getIsShow(i, selItem) {
      return i === selItem
    },
    onSelItem(i) {
      this.selItem = i
      this.$emit('on-sel-item-file', i)
    }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
