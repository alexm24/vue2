<template>
  <div class="fixed-svg">
    <ThumbUp />
    <ThumbDown />
    <Favorite />
    <Fire />
    <Mood />
  </div>
</template>

<script>
import ThumbUp from '@/pic/svg/thumb-up'
import ThumbDown from '@/pic/svg/thumb-down'
import Favorite from '@/pic/svg/favorite'
import Mood from '@/pic/svg/mood'
import Fire from '@/pic/svg/fire'
export default {
  name: 'fixed-svg',
  components: { ThumbUp, ThumbDown, Favorite, Mood, Fire }
}
</script>

<style scoped>
.fixed-svg {
  visibility: hidden;
  height: 0;
  width: 0;
  opacity: 0;
}
</style>
