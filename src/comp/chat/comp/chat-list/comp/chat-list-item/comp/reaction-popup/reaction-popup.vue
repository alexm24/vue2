<template>
  <div class="reaction-popup">
    <button>😄</button>
    <ReactionPopupMenu :id="id" @on-redraw="$emit('on-redraw')" />
  </div>
</template>

<script>
import ReactionPopupMenu from '../reaction-popup-menu/reaction-popup-menu'
export default {
  name: 'reaction-popup',
  components: { ReactionPopupMenu },
  props: {
    id: { type: String }
  }
}
</script>

<style lang="sass">
@import './styles/index.scss'
</style>
