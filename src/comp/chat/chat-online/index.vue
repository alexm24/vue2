<template>
  <ChatOnline
    :chat-list="chatList"
    :username="username"
    @on-send-msg="onSendMsg"
    @on-is-anon="onIsAnon"
  />
</template>

<script>
import ChatOnline from './chat-online'
import { mapMutations, mapGetters } from 'vuex'
import { consoleLog } from '@/comp/utils'
import { GETTER_APP, MUTATION_APP } from '@/store/const/type'
import {
  getCentrifuge,
  getHistoryMsg,
  postAxiosMessage,
  getAxiosMessage,
  postAxiosReactionMsg,
  patchAxiosReactionMsg,
  ACTION_CHAT
} from '../func'
import {
  getLocalStorageToken,
  isExpiresAt,
  postAxiosUserGetToken,
  setLocalStorageToken
} from '@/views/Watch/fumc'

export default {
  name: 'index-chat-online',

  components: { ChatOnline },

  data() {
    return {
      channel: this.$route.params.id,
      chatList: {},
      centrifuge: null,
      idInterval: 0
    }
  },

  methods: {
    ...mapMutations({ setMutationIsAppAnon: MUTATION_APP.IS_ANON }),
    onSendMsg({ text, is_question, is_anon }) {
      const { fullname, username, avatar } = this.user
      if (!text || !fullname || !username) return
      const time = new Date().toISOString()
      const msg = { fullname, username, text, time, avatar, is_question, is_anon }

      postAxiosMessage(this.channel, msg)
    },
    onIsAnon(isAnon) {
      this.setMutationIsAppAnon(isAnon)
    },
    clearChatList() {
      this.chatList = {}
    },
    updateChatReaction({ id, reactions }) {
      if (!id) return
      this.chatList[id].reactions = reactions
    }
  },

  computed: {
    ...mapGetters({ getGettersUser: GETTER_APP.USER }),
    username() {
      return this.getGettersUser.username
    }
  },

  mounted() {
    this.$root.$on('on-root-reaction-msg', (type, id, isSelf) => {
      if (isSelf) postAxiosReactionMsg(this.channel, type, id, this.username)
      else patchAxiosReactionMsg(this.channel, id, this.username)
    })
  },

  async created() {
    // get token
    let token
    const { username, fullname, avatar } = this.$store.state.app.user
    if (!username) {
      consoleLog.info('undefined user to $store watch comp')
      return
    }
    this.user = { username, fullname, avatar }
    const { accessToken, exp } = getLocalStorageToken()
    if (isExpiresAt(exp)) {
      token = accessToken
    } else {
      const o = await postAxiosUserGetToken(username)
      if (!o.token || !o.exp) {
        consoleLog.info('undefined token to watch comp')
        return
      }
      setLocalStorageToken(o.token, o.exp)
      token = o.token
    }

    // get messages History
    const messages = await getAxiosMessage(this.channel)
    this.chatList = getHistoryMsg(messages)

    // connect centrifuge
    const centrifuge = getCentrifuge(token)

    // subscribe to incoming messages
    const subscription = centrifuge.subscribe(this.channel, (ctx) => {
      const { id, ...props } = ctx.data
      if (id) {
        this.chatList = { ...this.chatList, [id]: { id, ...props } }
      } else {
        const { type, payload } = props
        if (!type) return
        if (ACTION_CHAT.CLEAR === type) this.clearChatList()
        if (ACTION_CHAT.REACTIONS === type) this.updateChatReaction(payload)
      }
    })

    // online users
    subscription.presenceStats().then(
      ({ num_users }) => this.$emit('on-online-users', num_users),
      (err) => console.log(err)
    )
    //TODO Duplicate 30s online users
    this.idInterval = setInterval(() => {
      subscription.presenceStats().then(
        ({ num_users }) => this.$emit('on-online-users', num_users),
        (err) => console.log(err)
      )
    }, 30000)
    this.centrifuge = centrifuge
  },

  destroyed() {
    clearInterval(this.idInterval)
    this.centrifuge.disconnect()
    this.setMutationIsAppAnon(false)
    this.$root.$off('on-root-reaction-msg')
  }
}
</script>

<style lang="scss">
@import '../styles';
</style>
