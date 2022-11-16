import axios from 'axios'
import { API_URL } from '@/const'

export const getAxiosZoomById = async (id) => {
  let isId = !!id
  if (!isId) return {}
  try {
    const { data } = await axios.get(`${API_URL.ZOOM}/${id}`)
    return data
  } catch (e) {
    console.log(e.response.data)
  }
  return {}
}
