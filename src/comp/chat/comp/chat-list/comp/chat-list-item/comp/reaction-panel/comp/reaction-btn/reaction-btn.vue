<template>
  <div
    :class="['reaction-btn', { 'reaction-btn--active': isSelfReaction }]"
    v-if="isShowBtn"
    @click.stop="onClickBtn(name)"
  >
    <span>{{ count }}</span>
    <button v-if="isLike">👍</button>
    <button v-if="isDislike">👎</button>
    <button v-if="isFire">🔥</button>
    <button v-if="isFavorite">🧡</button>
  </div>
</template>

<script>
import { REACTIONS } from '@/comp/chat/func'
export default {
  name: 'reaction-btn',
  props: {
    id: { type: String },
    name: { type: String },
    count: { type: Number },
    isSelfReaction: { type: Boolean }
  },
  computed: {
    isShowBtn() {
      if (!this.count) return false
      return Object.values(REACTIONS).includes(this.name)
    },
    isLike() {
      return REACTIONS.LIKE === this.name
    },
    isDislike() {
      return REACTIONS.DISLIKE === this.name
    },
    isFire() {
      return REACTIONS.FIRE === this.name
    },
    isFavorite() {
      return REACTIONS.FAVORITE === this.name
    }
  },
  methods: {
    onClickBtn(name) {
      if (this.isSelfReaction) this.$root.$emit('on-root-reaction-msg', '', this.id, true)
      else this.$root.$emit('on-root-reaction-msg', name, this.id, true)
    }
  }
}
</script>

<style lang="sass">
@import './styles/index.scss'
</style>
