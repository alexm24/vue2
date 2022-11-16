<template>
  <div class="watch-footer">
    <main>
      <section>
        <nav :title="name">
          {{ name }}
        </nav>
      </section>
      <ul class="watch-folder-info">
        <li>
          <DateRange />
          <span>{{ getFormatDate(date) }}</span>
        </li>
        <li>
          <Schedule />
          <span>{{ getTimeToStr(date) }}</span>
        </li>
        <li class="person-online" v-if="onlineUsers">
          <Person />
          <span>{{ onlineUsers }}</span>
        </li>
      </ul>
    </main>
    <footer>
      <ul class="watch-folder-info">
        <li class="cursor-pointer" @click="isDesc = true" v-if="!!desc">
          <span>Описание</span>
        </li>
        <li class="cursor-pointer" @click="isClickAttachFile = true" v-if="!!attachCount">
          <AttachFile />
          <span>вложений: {{ attachCount }}</span>
        </li>
      </ul>
      <BroadcastDesc @on-close-desc="isDesc = false" :visible="isDesc" :desc="desc" />
      <PanelAttach
        v-on:close-panel="isClickAttachFile = false"
        :visible="isClickAttachFile"
        v-if="isClickAttachFile"
        :attach-file="attachFile"
      />
    </footer>
  </div>
</template>

<script>
import BroadcastDesc from '@/comp/watch-desc'
import PanelAttach from './comp/panel-attach'
import Schedule from '@/pic/svg/schedule'
import AttachFile from '@/pic/svg/attach-file'
import Person from '@/pic/svg/person'
import DateRange from '@/pic/svg/date-range'
import { getFormatDate, getTimeToStr } from '@/comp/utils'
export default {
  name: 'watch-footer',
  components: { Schedule, AttachFile, BroadcastDesc, PanelAttach, Person, DateRange },
  props: {
    name: {
      type: String
    },
    desc: {
      type: String
    },
    date: {
      type: String
    },
    onlineUsers: { type: Number },
    attachFile: { type: Object }
  },
  data() {
    return {
      isDesc: false,
      isClickAttachFile: false
    }
  },
  methods: {
    getFormatDate(date) {
      return getFormatDate(date)
    },
    getTimeToStr(date) {
      return getTimeToStr(date)
    }
  },
  computed: {
    attachCount() {
      if (!this.attachFile) return 0
      return Object.keys(this.attachFile).length
    }
  }
}
</script>
