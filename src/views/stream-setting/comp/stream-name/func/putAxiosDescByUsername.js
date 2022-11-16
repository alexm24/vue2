import axios from 'axios'
import { API_URL } from '@/const'

export const putAxiosDescByUsername = async (username, description) => {
  try {
    const { data } = await axios.put(API_URL.STREAM, { username, description })
    return data
  } catch (e) {
    console.log(e.response.data)
  }
  return null
}
