import axios from 'axios'
import { API_URL } from '@/const'

export const getAxiosZoomByEmail = async (email) => {
  let isEmail = !!email
  if (!isEmail) return []
  try {
    const { data } = await axios.get(`${API_URL.ZOOM_EMAIL}/${email}`)
    return data
  } catch (e) {
    console.log(e.response.data)
  }
  return []
}
