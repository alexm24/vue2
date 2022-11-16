import axios from 'axios'
import { API_URL } from '@/const'
import { PlayerWazd } from '@/comp/utils'

export const getAxiosLive = (id, elDiv, setLive) => {
  axios
    .get(`${API_URL.LIVE}/${id}`)
    .then((res) => {
      const { stream_url, place, description } = res.data
      setLive(place, description)
      const videoSrc = `${stream_url}.m3u8`
      const player = PlayerWazd(videoSrc)
      elDiv.appendChild(player)
    })
    .catch((err) => console.log(err.response.data))
}
