import axios from 'axios'
import { API_URL } from '@/const'
export const postAxiosUserGetToken = async (username) => {
  try {
    const { data } = await axios.post(API_URL.TOKEN, { username })
    return data
  } catch (e) {
    console.log(e.response.data)
  }
}
