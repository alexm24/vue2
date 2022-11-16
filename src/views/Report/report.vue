<template>
  <div class="report">
    <h2>Отчет по трансляции</h2>
    <ReportHeader @on-sel-header="onSelHeader" />
    <ReportMsg v-if="isReportMsg" :msg="broadcastMsg" />
    <ReportParticipant v-if="isReportParticipant" :user="broadcastUser" />
    <footer>
      <button @click.prevent="onClick">
        <Download />
        <span>Отчет в Excel</span>
      </button>
    </footer>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import { getTimeToStr } from '@/comp/utils'
import ReportHeader from './comp/report-header/report-header'
import ReportMsg from './comp/report-msg/report-msg'
import ReportParticipant from './comp/report-participant/report-participant'
import { REPORT, REPORT_HEADER } from './func'
import Download from '@/pic/svg/download'
export default {
  name: 'report',
  components: { ReportHeader, ReportMsg, ReportParticipant, Download },
  props: {
    broadcastName: { type: String },
    broadcastMsg: { type: Array },
    broadcastUser: { type: Array }
  },
  data() {
    return {
      selHeader: REPORT.CHAT
    }
  },
  computed: {
    isReportMsg() {
      return this.selHeader === REPORT.CHAT
    },
    isReportParticipant() {
      return this.selHeader === REPORT.PARTICIPANT
    }
  },
  methods: {
    onSelHeader(sel) {
      this.selHeader = sel
    },
    onClick() {
      const bodyMsg = this.broadcastMsg.map((e) => [
        e.is_question ? 'да' : '',
        e.is_anon ? 'да' : '',
        getTimeToStr(e.time),
        e.is_anon ? 'Анонимный пользователь' : e.fullname,
        e.text
      ])
      const bodyUser = this.broadcastUser.map((e) => [e.fullname, e.email])
      const msgTab = { name: 'Чат', header: REPORT_HEADER.MESSAGE, body: bodyMsg }
      const participantTab = { name: 'Участники', header: REPORT_HEADER.USER, body: bodyUser }
      const arr = [msgTab, participantTab]
      const book = XLSX.utils.book_new()
      arr.forEach((item) => {
        const data = item.body
        data.unshift(item.header)
        const sheet = XLSX.utils.aoa_to_sheet(data)
        XLSX.utils.book_append_sheet(book, sheet, item.name)
      })
      XLSX.writeFile(book, this.broadcastName)
    }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
