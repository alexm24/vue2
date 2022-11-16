import axios from 'axios'
import { API_URL } from '@/const'

export const getAxiosMsg = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL.MESSAGES}/${id}`)
    return data
  } catch (e) {
    console.log(e.response.data)
  }
  return []
}
