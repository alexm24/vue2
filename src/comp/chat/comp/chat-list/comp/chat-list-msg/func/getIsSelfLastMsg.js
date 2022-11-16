/**
 * Возвращает true, если последнее сообщение собственное.
 *
 * @param {Object} msgList - список сообщений;
 * @param {string} user - id пользователя ;
 * @return {boolean} Возвращает true, если последнее сообщение собственное, false если нет или произошла ошибка;
 *
 */
export const getIsSelfLastMsg = (msgList, user) => {
  const isUser = !!user.trim()
  const isMsgList = !!msgList
  if (!isUser || !isMsgList) return false
  const { fromId } = msgList.last()
  return fromId === user
}
