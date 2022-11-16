import axios from 'axios'
import { API_URL } from '@/const'

export const postAxiosStream = async (username) => {
  try {
    const { data } = await axios.post(API_URL.STREAM, { username })
    return data
  } catch (e) {
    console.log(e.response.data)
  }
  return {}
}
