import axios from 'axios'
import { API_URL } from '@/const'
export const patchAxiosReactionMsg = (channel, id, username) => {
  axios
    .patch(`${API_URL.MESSAGES}/${channel}/reaction`, { id, username })
    .catch((err) => console.log(err.response.data))
}
