import axios from 'axios'
import { API_URL } from '@/const'
export const getAxiosAttachFile = (id, setAttachFileLoaded) => {
  if (!id) return
  axios
    .get(`${API_URL.FILE}/${id}`)
    .then(({ data }) => {
      if (!data) return
      if (!data.length) return
      const fileInfo = data.reduce((a, e) => {
        const { id, ...item } = e
        return { ...a, [id]: item }
      }, {})
      setAttachFileLoaded(fileInfo)
    })
    .catch((err) => console.log(err.response.data))
}
