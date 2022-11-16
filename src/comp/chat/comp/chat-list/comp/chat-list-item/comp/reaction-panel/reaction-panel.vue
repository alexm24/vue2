<template>
  <div class="reaction-panel">
    <ReactionBtn
      v-for="[key, value] in reactions"
      :key="key"
      :id="id"
      :name="key"
      :count="value"
      :isSelfReaction="selfReaction === key"
    />
  </div>
</template>

<script>
import ReactionBtn from './comp/reaction-btn/reaction-btn'
export default {
  name: 'reaction-panel',
  components: { ReactionBtn },
  props: {
    id: { type: String },
    username: { type: String },
    selfReaction: { type: String },
    reactions: { type: Map }
  }
}
</script>

<style lang="sass">
@import './styles/index.scss'
</style>
