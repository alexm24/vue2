<template>
  <div class="watch-footer">
    <main>
      <section>
        <nav :title="name">
          {{ name }}
        </nav>
      </section>
      <ul class="watch-folder-info">
        <li class="person-online" v-if="onlineUsers">
          <Person />
          <span>{{ onlineUsers }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Person from '@/pic/svg/person'
export default {
  name: 'page-stream-footer',
  components: { Person },
  props: {
    name: { type: String },
    onlineUsers: { type: Number }
  }
}
</script>
