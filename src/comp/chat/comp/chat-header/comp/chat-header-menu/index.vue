<template>
  <ul class="chat-header-menu" ref="menuChat" v-click-outside="onClickOutside">
    <li @click="$emit('on-menu-sel', CHAT_ALL)">
      <span :class="{ 'menu-sel-item': CHAT_ALL === menuSel }" />
      <p>Чат трансляции</p>
    </li>
    <li @click="$emit('on-menu-sel', CHAT_QUESTION)">
      <span :class="{ 'menu-sel-item': CHAT_QUESTION === menuSel }" />
      <p>Только вопросы</p>
    </li>
  </ul>
</template>

<script>
import { clickOutside } from '@/comp/utils'
import { CHAT } from '../../../../func'
export default {
  name: 'chat-header-menu',
  data() {
    return {
      CHAT_ALL: CHAT.ALL,
      CHAT_QUESTION: CHAT.QUESTION
    }
  },
  props: {
    menuSel: {
      type: Number
    }
  },
  methods: {
    onClickOutside() {
      this.$emit('close-menu')
    }
  },
  directives: { clickOutside }
}
</script>

<style lang="sass">
@import './styles/index.scss'
</style>
