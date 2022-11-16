import axios from 'axios'
import { API_URL } from '@/const'

export const delAttachFile = async (items) => {
  if (!items) return
  if (!items.length) return

  for (let i = 0; i < items.length; i++) {
    try {
      await axios.delete(`${API_URL.FILE}/${items[i]}`)
    } catch (e) {
      console.log(e.response.data)
    }
  }
}
