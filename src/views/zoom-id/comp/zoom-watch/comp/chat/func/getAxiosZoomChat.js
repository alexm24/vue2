import axios from 'axios'

export const getAxiosZoomChat = async (path) => {
  let isPath = !!path
  if (!isPath) return ''
  try {
    const { data } = await axios.get(path)
    return data
  } catch (e) {
    console.log(e.response.data)
  }
  return ''
}
