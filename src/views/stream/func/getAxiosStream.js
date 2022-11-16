import axios from 'axios'
import { API_URL } from '@/const'

export const getAxiosStream = async (channel) => {
  try {
    const { data } = await axios.get(`${API_URL.STREAM}/${channel}`)
    return data
  } catch (e) {
    console.log(e.response.data)
  }
  return {}
}
