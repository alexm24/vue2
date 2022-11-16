import axios from 'axios'
import { API_URL } from '@/const'
import { getHistoryMsg } from '../../func'
export const getAxiosMsgBroadcastById = async (id, setStateChatList) => {
  try {
    const { data } = await axios.get(`${API_URL.MESSAGES}/${id}`)
    if (!data) return {}
    if (data.length === 0) return {}
    let chatList = getHistoryMsg(data)
    setStateChatList(chatList)
  } catch (e) {
    console.log(e.response.data)
  }
}
