<template>
  <div class="stream-setting">
    <div class="stream-setting-wp-lp">
      <div class="stream-setting-lp">
        <StreamPlayer :online-users="onlineUsers" :stream-key="streamKey" :description="desc" />
        <br />
        <StreamName :username="username" :description="desc" />
      </div>
      <div class="stream-setting-cp">
        <div class="stream-wrap">
          <StreamPanel
            title="Настройка OBS"
            :items="{
              title1: 'URL сервера',
              title2: 'Ключ стрима',
              value1: rtmp,
              value2: streamKey
            }"
          />
          <br />
          <PanelLink title="Ссылка на стрим" label="Трансляция" :value="link" />
          <br />
          <StreamChatCtrl :username="username" />
        </div>
      </div>
    </div>
    <div class="stream-setting-rp">
      <ChatOnline v-if="true" @on-online-users="onOnlineUsers" />
    </div>
  </div>
</template>

<script>
import ChatOnline from '@/comp/chat/chat-online'
import StreamPanel from './comp/stream-panel/stream-panel'
import StreamPlayer from './comp/stream-player/stream-player'
import StreamName from './comp/stream-name/stream-name'
import StreamChatCtrl from './comp/stream-chat-ctrl'
import PanelLink from './comp/panel-link/panel-link'
export default {
  name: 'page-stream-setting',
  components: { StreamPanel, ChatOnline, StreamPlayer, StreamName, StreamChatCtrl, PanelLink },
  props: {
    rtmp: { type: String },
    link: { type: String },
    streamKey: { type: String },
    username: { type: String },
    desc: { type: String }
  },
  data() {
    return {
      onlineUsers: 0
    }
  },
  methods: {
    onOnlineUsers(users) {
      this.onlineUsers = users
    }
  }
}
</script>
<style lang="scss">
@import './styles/index.scss';
</style>
