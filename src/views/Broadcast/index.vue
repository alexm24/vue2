<template>
  <div class="broadcast-edit">
    <main>
      <h1>{{ broadcastTitle }}</h1>

      <mts-input v-model="key" label="Ключ потока" placeholder="Введите ключ" required />
      <br />

      <div class="broadcast-start">
        <mts-date-picker
          v-model="date"
          placeholder="дд.мм.гггг"
          prefix-icon="mts-icon-calendar"
          label="Выберите дату"
          style="width: 80%"
          required
          clearable
        />
        <mts-input
          v-model="time"
          label="Начало"
          type="time"
          style="width: 18%; margin-left: auto"
          required
        />
      </div>
      <br />

      <mts-input v-model="name" label="Название" placeholder="Введите название" required />
      <br />

      <AttachImg
        @change-img-file="changeImgFile"
        @change-img-del="changeImgDel"
        :uploadFile="imgFileLoaded"
      />
      <br />

      <mts-textarea v-model="desc" label="Описание" placeholder="Введите описание" required />
      <br />

      <AttachFile
        @change-attach-file="changeAttachFile"
        @change-attach-del="changeAttachDel"
        :uploadFile="attachFileLoaded"
      />
      <br />

      <mts-button @click="submit" theme="dark">{{ btnSubText }}</mts-button>
    </main>
  </div>
</template>

<script>
import {
  geTimeSplit,
  getDateTimeString,
  postAxiosAttachFile,
  delAttachFile,
  defaultImgName
} from './func'
import { getTimeToStr } from '@/comp/utils'
import { mapActions, mapGetters } from 'vuex'
import AttachFile from './comp/attach-file'
import AttachImg from './comp/attach-img'
import { getAxiosAttachFile } from '@/comp/utils'
import { ACTION_AXIOS_BROADCAST, ACTION_AXIOS_IMAGE, GETTER_APP } from '@/store/const/type'
export default {
  name: 'broadcast',
  components: { AttachFile, AttachImg },
  data() {
    return {
      id: '',
      key: '',
      date: new Date(),
      time: '12:00',
      name: '',
      desc: '',
      imgFile: null,
      imgFileLoaded: {},
      imgFileLoadedDel: [],
      attachFile: null,
      attachFileLoaded: {},
      attachFileLoadedDel: []
    }
  },
  methods: {
    ...mapActions({
      axiosBroadcastPost: ACTION_AXIOS_BROADCAST.POST,
      axiosBroadcastPut: ACTION_AXIOS_BROADCAST.PUT,
      axiosImagePost: ACTION_AXIOS_IMAGE.POST,
      axiosImagePut: ACTION_AXIOS_IMAGE.PUT
    }),
    async submit() {
      const { hour, minute } = geTimeSplit(this.time)
      const startBroadcast = getDateTimeString(this.date, hour, minute)
      const broadcast = {
        stream_key: this.key,
        start_time: startBroadcast,
        name: this.name,
        description: this.desc,
        owner: this.user.username
      }
      const file = this.imgFile ? this.imgFile : null
      if (this.id) {
        // ------ edit broadcast --------
        const putBroadcast = { ...broadcast, id: this.id }
        const id = await this.axiosBroadcastPut(putBroadcast)
        if (!id) return
        // image
        if (file) await this.axiosImagePost({ id, file })
        else {
          const isDelImg = this.imgFileLoadedDel.length > 0
          if (isDelImg) await this.axiosImagePut(id)
        }
        // send attach file
        if (this.attachFile) await postAxiosAttachFile(id, this.attachFile)
        // attach check delete file
        const isAttachFileLoadedDel = this.attachFileLoadedDel.length > 0
        if (isAttachFileLoadedDel) await delAttachFile(this.attachFileLoadedDel)
      } else {
        // ------ new broadcast -----------
        const id = await this.axiosBroadcastPost(broadcast)
        if (!id) return
        if (file) await this.axiosImagePost({ id, file })
        await postAxiosAttachFile(id, this.attachFile)
      }
      await this.$router.push('/')
    },
    changeImgFile(file) {
      this.imgFile = file
      this.imgFileLoaded = null
    },
    changeImgDel(id) {
      this.imgFileLoadedDel = [...this.imgFileLoadedDel, id]
      this.imgFileLoaded = null
    },
    changeAttachDel(id) {
      this.attachFileLoadedDel.push(id)
      const del = { ...this.attachFileLoaded }
      delete del[id]
      this.attachFileLoaded = del
    },
    changeAttachFile(files) {
      this.attachFile = files
    },
    setAttachFileLoaded(files) {
      this.attachFileLoaded = files
    },
    setBroadcast(item) {
      this.id = item.id
      this.name = item.name
      this.desc = item.description
      this.key = item.stream_key
      this.date = new Date(item.start_time)
      this.time = getTimeToStr(item.start_time)
      if (item.preview_url) this.imgFileLoaded = { [this.id]: defaultImgName }
    }
  },
  computed: {
    ...mapGetters({ user: GETTER_APP.USER }),
    broadcastTitle() {
      return this.id ? 'Редактировать трансляцию' : 'Создать новую трансляцию'
    },
    btnSubText() {
      return this.id ? 'Редактировать' : 'Создать'
    }
  },
  created() {
    const id = this.$route.params.id
    let item
    if (!id) return

    //TODO load broadcast backend to edit
    item = this.$store.state.broadcast.future[id]

    if (item) {
      this.setBroadcast(item)
    } else this.$router.push('/')
    getAxiosAttachFile(id, this.setAttachFileLoaded)
  }
}
</script>

<style lang="sass">
@import './styles/index.scss'
</style>
