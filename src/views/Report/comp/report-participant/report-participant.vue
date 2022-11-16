<template>
  <table class="table-participant">
    <thead>
      <tr>
        <th v-for="(e, i) in reportHeader" :key="i">{{ e }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(n, i) in user" :key="i">
        <td>{{ n.fullname }}</td>
        <td>{{ n.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { REPORT_HEADER } from '@/views/Report/func'

export default {
  name: 'report-participant',
  props: {
    user: { type: Array }
  },
  data() {
    return {
      reportHeader: REPORT_HEADER.USER
    }
  }
}
</script>
<style lang="scss">
@import './styles';
</style>
