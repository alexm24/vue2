/**
 * Устанавливает скролл в конец ленты сообщений
 *
 * @param {HTMLElement} el - ссылка на обьект
 * @return {boolean} Если функция выполнила все успешно то возвращает true иначе false
 *
 */
export const setScrollEnd = (el) => {
  if (!el) return false
  el.scrollTop = el.scrollHeight - el.clientHeight
  return true
}
