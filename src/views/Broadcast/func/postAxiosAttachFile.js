import axios from 'axios'
import { API_URL } from '@/const'

const bodyFormData = new FormData()
const config = { headers: { 'Content-Type': 'multipart/form-data' } }

export const postAxiosAttachFile = async (id, files) => {
  if (!id) return
  if (!id.length) return
  if (!files) return
  if (!files.length) return

  bodyFormData.set('id', id)

  for (let i = 0; i < files.length; i++) {
    bodyFormData.set('file', files[i])
    try {
      await axios.post(API_URL.FILE, bodyFormData, config)
    } catch (e) {
      console.log(e.response.data)
    }
  }
}
