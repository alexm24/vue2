import axios from 'axios'
import { API_URL } from '@/const'
export const postAxiosParticipant = (channel, { email, fullname, username }) => {
  const user = { email, fullname, username }
  axios
    .post(`${API_URL.PARTICIPANTS_V1}/${channel}`, user)
    .then(() => {})
    .catch((err) => console.log(err.response.data))
}
