<template>
  <div class="zoom">
    <h2>{{ title }}</h2>
    <ZoomTable v-if="isTable" :conference="conference" />
  </div>
</template>

<script>
import ZoomTable from './comp/zoom-table/zoom-table'
export default {
  name: 'zoom',
  components: { ZoomTable },
  props: {
    conference: { type: Array }
  },
  computed: {
    title() {
      return this.conference.length > 0 ? '' : 'Запись не найдена'
    },
    isTable() {
      return this.conference.length > 0
    }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
