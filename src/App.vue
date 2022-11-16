<template>
  <div id="app">
    <mts-app-header
      :logo="header.logo"
      :nav="nav"
      :avatar="header.avatar"
      @login="login"
      @logout="logout"
    />

    <!-- fixed svg with id # -->
    <FixedSVG />

    <!-- route -->
    <router-view />

    <!-- панель управление трансляции -->
    <StreamCtrl v-if="isVisibleStreamCtrl" />
    <!-- панель подтверждения удаление карточки трансляции -->
    <WatchCardDel v-if="isVisibleWatchCardDel" />
    <!-- панель подтверждения очистки чата -->
    <StreamChatClear v-if="isVisibleStreamChatClear" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { logoMap, ROUTE_NAME_BROADCAST, APP_ROUTE, URL } from '@/const'
import {
  GETTER_STREAM_CTRL,
  GETTER_APP,
  GETTER_WATCH_CARD_DEL,
  GETTER_STREAM_CHAT_CLEAR
} from '@/store/const/type'
import StreamCtrl from '@/comp/stream-ctrl'
import StreamChatClear from '@/comp/stream-chat-clear'
import WatchCardDel from '@/comp/watch-card-del'
import FixedSVG from '@/comp/fixed-svg/fixed-svg'
export default {
  name: 'App',
  components: { StreamChatClear, WatchCardDel, StreamCtrl, FixedSVG },
  props: ['keycloak'],
  data() {
    return {
      navBroadcast: { label: 'Создать Трансляцию', to: '/broadcast/new' }
    }
  },
  methods: {
    logout() {
      this.keycloak.logout()
    },
    login() {
      console.log('handle login')
    },
    setNavBroadcast(name, params) {
      const isEdit = name === ROUTE_NAME_BROADCAST.EDIT
      const label = isEdit ? 'Редактировать трансляцию' : 'Создать Трансляцию'
      const to = isEdit ? `/${APP_ROUTE.BROADCAST}/${params.id}` : `/${APP_ROUTE.BROADCAST}/new`
      this.navBroadcast = { label, to }
    }
  },
  computed: {
    /**
     * hidden используется для того, чтобы скрыть/показать часть
     * меню в навигационной панеле, эти права у пользователя могут
     * появиться в любой момент, если такое произойдет, то мы используем
     * реактивность computed-свойств для того, чтобы приложение автоматически
     * среагировало на эти изменения
     */
    nav() {
      return [
        this.navBroadcast,
        { label: 'Мой канал', to: `/${APP_ROUTE.STREAM_SETTING}/${this.user.username}` },
        { label: 'Записи Zoom', to: `/${APP_ROUTE.ZOOM}` },
        { label: 'Помощь', to: `/${APP_ROUTE.HELP}` }
      ]
    },
    header() {
      return {
        avatar: this.isAnon
          ? {
              value: 'Анонимный режим'
            }
          : {
              value: this.keycloak.tokenParsed.name,
              src: `${URL.ISSO_AVATAR}/${this.user.avatar}`
            },
        logo: logoMap[__STAND_TYPE__],
        nav: this.nav
      }
    },
    ...mapGetters({
      isVisibleStreamCtrl: GETTER_STREAM_CTRL.IS_VISIBLE,
      isVisibleWatchCardDel: GETTER_WATCH_CARD_DEL.IS_VISIBLE,
      isVisibleStreamChatClear: GETTER_STREAM_CHAT_CLEAR.IS_VISIBLE,
      user: GETTER_APP.USER,
      isAnon: GETTER_APP.IS_ANON
    })
  },
  watch: {
    $route(path) {
      this.setNavBroadcast(path.name, path.params)
    }
  },
  created() {
    if (!__DEV__) {
      console.info('VERSION', __VERSION__)
      console.info('RELEASE_TIME', __RELEASE_TIME__)
      console.info('STAND_TYPE', __STAND_TYPE__)
      console.info('COMMIT', __COMMIT__)
      console.info('PIPELINE_URL', __PIPELINE_URL__)
    }
    this.setNavBroadcast(this.$route.name, this.$route.params)
  }
}
</script>
