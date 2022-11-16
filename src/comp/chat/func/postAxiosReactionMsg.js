import axios from 'axios'
import { API_URL } from '@/const'
export const postAxiosReactionMsg = (channel, type, id, username) => {
  axios
    .post(`${API_URL.MESSAGES}/${channel}/reaction`, { id, type, username })
    .catch((err) => console.log(err.response.data))
}
