import axios from 'axios'
import { API_URL } from '@/const'

export const deleteAxiosClearChat = async (channel) => {
  try {
    await axios.delete(`${API_URL.STREAM_CHAT}/${channel}`)
  } catch (e) {
    console.log(e.response.data)
  }
}
