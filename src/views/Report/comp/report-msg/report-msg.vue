<template>
  <table class="table-msg">
    <thead>
      <tr>
        <th v-for="(e, i) in reportHeader" :key="i">{{ e }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="n in msg" :key="n.id">
        <td><Done v-if="n.is_question" /></td>
        <td><Done v-if="n.is_anon" /></td>
        <td>{{ getTime(n.time) }}</td>
        <td>{{ getFullname(n) }}</td>
        <td>{{ n.text }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Done from '@/pic/svg/done'
import { getTimeToStr } from '@/comp/utils'
import { REPORT_HEADER } from '../../func'
export default {
  name: 'report-msg',
  components: { Done },
  props: {
    msg: { type: Array }
  },
  data() {
    return {
      reportHeader: REPORT_HEADER.MESSAGE
    }
  },
  methods: {
    getTime(time) {
      return getTimeToStr(time)
    },
    getFullname(item) {
      if (item.is_anon) return 'Анонимный пользователь'
      return item.fullname
    }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
