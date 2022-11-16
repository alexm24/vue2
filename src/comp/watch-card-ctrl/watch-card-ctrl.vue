<template>
  <ul class="watch-card-ctrl">
    <li v-if="isFutureBroadcast">
      <button @click.prevent="$emit('on-setting')" title="Управление вещанием">
        <Settings />
      </button>
    </li>
    <li>
      <button v-if="!isFutureBroadcast" @click.prevent="$emit('on-report')">
        <Description />
      </button>
      <button
        v-if="isFutureBroadcast"
        @click.prevent="$emit('on-copy-link')"
        title="Копировать ссылку"
      >
        <Share />
      </button>
      <button v-if="isFutureBroadcast" @click.prevent="$emit('on-edit')" title="Редактировать">
        <EditBroadcast />
      </button>
      <button @click.prevent="$emit('on-delete')" title="Удалить">
        <Delete />
      </button>
    </li>
  </ul>
</template>

<script>
import Delete from '@/pic/svg/delete'
import EditBroadcast from '@/pic/svg/edit-broadcast'
import Share from '@/pic/svg/share'
import Settings from '@/pic/svg/settings'
import Description from '@/pic/svg/description'
import { LIFE_CYCLE } from '@/const'
export default {
  name: 'watch-card-ctrl',
  props: {
    lifeCycle: { type: Symbol }
  },
  components: { Delete, EditBroadcast, Share, Settings, Description },
  computed: {
    isFutureBroadcast() {
      return this.lifeCycle === LIFE_CYCLE.FUTURE
    }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
