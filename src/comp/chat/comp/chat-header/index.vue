<template>
  <div class="chat-header">
    <button @click.stop="isMenu = true">
      <span>{{ chatName }}</span>
      <ArrowDropDown />
    </button>
    <ChatHeaderMenu
      v-if="isMenu"
      @close-menu="isMenu = false"
      :menu-sel="menuSel"
      @on-menu-sel="onMenuSel"
    />
  </div>
</template>

<script>
import ChatHeaderMenu from './comp/chat-header-menu'
import ArrowDropDown from '@/pic/svg/arrow-drop-down'
import { CHAT } from '../../func'
export default {
  name: 'chat-header',
  components: { ArrowDropDown, ChatHeaderMenu },
  props: {
    menuSel: {
      type: Number
    }
  },
  data() {
    return {
      isMenu: false,
      menuSelectItem: 0
    }
  },
  methods: {
    onMenuSel(e) {
      this.isMenu = false
      this.$emit('on-menu-sel', e)
    }
  },
  computed: {
    chatName() {
      if (this.menuSel === CHAT.ALL) return 'Чат трансляции'
      return 'Только вопросы'
    }
  }
}
</script>

<style lang="sass">
@import './styles/index.scss'
</style>
