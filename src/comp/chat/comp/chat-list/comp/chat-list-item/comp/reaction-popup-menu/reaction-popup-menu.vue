<template>
  <div class="reaction-popup-menu">
    <button @click.stop="clickBtn(fire)">๐ฅ</button>
    <button @click.stop="clickBtn(favorite)">๐งก</button>
    <button @click.stop="clickBtn(dislike)">๐</button>
    <button @click.stop="clickBtn(like)">๐</button>
  </div>
</template>

<script>
import { REACTIONS } from '@/comp/chat/func'
export default {
  name: 'reaction-popup-menu',
  props: {
    id: { type: String }
  },
  methods: {
    clickBtn(type) {
      this.$root.$emit('on-root-reaction-msg', type, this.id, true)
      this.$emit('on-redraw')
    }
  },
  computed: {
    like() {
      return REACTIONS.LIKE
    },
    dislike() {
      return REACTIONS.DISLIKE
    },
    fire() {
      return REACTIONS.FIRE
    },
    favorite() {
      return REACTIONS.FAVORITE
    }
  }
}
</script>

<style lang="sass">
@import './styles/index.scss'
</style>
