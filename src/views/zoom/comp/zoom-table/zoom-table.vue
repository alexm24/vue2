<template>
  <table class="zoom-table">
    <thead>
      <tr>
        <th>Начало конференции</th>
        <th>Название конференции</th>
        <th>Количество файлов</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="c in conference" :key="c.id" @click="onClick(c.id)">
        <td>{{ getTimeDate(c.start_time) }}</td>
        <td>{{ c.topic }}</td>
        <td>{{ c.recording_count }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { getTimeDate } from './func'
import { APP_ROUTE } from '@/const'
export default {
  name: 'zoom-table',
  props: {
    conference: { type: Array }
  },
  methods: {
    getTimeDate(date) {
      return getTimeDate(date)
    },
    onClick(id) {
      this.$router.push(`${APP_ROUTE.ZOOM}/${id}`)
    }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
