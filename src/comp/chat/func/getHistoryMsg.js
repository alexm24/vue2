export const getHistoryMsg = (msg) => {
  if (!msg) return {}
  if (!msg.length) return {}
  let chatList = {}

  for (let i = 0; i < msg.length; i++) {
    const { id, ...props } = msg[i]
    chatList = { ...chatList, [id]: { id, ...props } }
  }
  return chatList
}
