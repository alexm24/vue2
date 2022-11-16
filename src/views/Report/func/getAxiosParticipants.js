import axios from 'axios'
import { API_URL } from '@/const'

export const getAxiosParticipants = async (channel) => {
  try {
    const { data } = await axios.get(`${API_URL.PARTICIPANTS_V1}/${channel}`)
    return data
  } catch (e) {
    console.log(e.response.data)
  }
  return []
}
