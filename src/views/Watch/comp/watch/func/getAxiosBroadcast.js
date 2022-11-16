import axios from 'axios'
import { API_URL } from '@/const'

export const getAxiosBroadcast = (id, setBroadcast) => {
  axios
    .get(`${API_URL.BROADCAST_V1}/${id}`)
    .then((res) => {
      const { stream_key, name, description, start_time, life } = res.data
      setBroadcast(name, description, start_time, life, stream_key)
    })
    .catch((err) => console.log(err.response.data))
}
