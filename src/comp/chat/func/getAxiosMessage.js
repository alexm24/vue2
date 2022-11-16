import axios from 'axios'
import { API_URL } from '@/const'

export const getAxiosMessage = async (channel) => {
  try {
    const { data } = await axios.get(`${API_URL.MESSAGES}/${channel}`)
    if (!data) return {}
    if (data.length === 0) return {}
    return data
  } catch (e) {
    console.log(e.response.data)
  }
  return {}
}
