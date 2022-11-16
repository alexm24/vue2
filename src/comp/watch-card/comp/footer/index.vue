<template>
  <div class="watch-card-footer">
    <span @click.prevent="$emit('on-show-desc', true)" v-if="!!description" v-text="'Описание'" />
    <ul>
      <li>
        <DateRange />
        <span>{{ getDate(date) }}</span>
      </li>
      <li>
        <Schedule />
        <span> {{ getTime(date) }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
import DateRange from '@/pic/svg/date-range'
import Schedule from '@/pic/svg/schedule'
import { getFormatDate, getTimeToStr } from '@/comp/utils'
export default {
  name: 'watch-card-footer',
  components: { DateRange, Schedule },
  props: {
    description: {
      description: String
    },
    date: {
      type: String
    }
  },
  methods: {
    getDate(date) {
      return getFormatDate(date)
    },
    getTime(date) {
      return getTimeToStr(date)
    }
  }
}
</script>

<style lang="scss">
@import 'styles/index';
</style>
