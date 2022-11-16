import axios from 'axios'
import { API_URL } from '@/const'

export const getAxiosBroadcast = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL.BROADCAST_V1}/${id}`)
    return data.name
  } catch (e) {
    console.log(e.response.data)
  }
  return ''
}
