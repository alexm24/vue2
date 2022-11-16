<template>
  <div class="stream-name">
    <nav>
      <h2>Отображение стрима</h2>
    </nav>
    <br />
    <main>
      <span>Название</span>
    </main>
    <footer>
      <input type="text" placeholder="описание стрима" v-model="desc" @blur="onBlur" />
    </footer>
  </div>
</template>

<script>
import { putAxiosDescByUsername } from './func'
export default {
  name: 'stream-name',
  props: {
    username: { type: String },
    description: { type: String }
  },
  data() {
    return {
      desc: ''
    }
  },
  methods: {
    onBlur() {
      putAxiosDescByUsername(this.username, this.desc)
    }
  },
  created() {
    this.desc = this.description
  }
}
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
