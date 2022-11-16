import axios from 'axios'
import { API_URL } from '@/const'
export const postAxiosMessage = (channel, msg) => {
  axios
    .post(`${API_URL.MESSAGES}/${channel}`, msg)
    .then(() => {})
    .catch((err) => console.log(err.response.data))
}
