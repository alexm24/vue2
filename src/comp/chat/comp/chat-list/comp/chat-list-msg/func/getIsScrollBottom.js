/**
 * Проверяет нахождение позиции скролла, если он внизу то возвращает true, иначе false;
 *
 * @param { HTMLElement } el - ссылка на обьект;
 * @param {number} offset - сдвиг по умолчанию равен 100;
 * @return {boolean} true елсли позиция скролла внизу, иначе false;
 *
 */
export const getIsScrollBottom = (el, offset = 100) => {
  if (!el) return false

  const { scrollHeight, scrollTop, clientHeight } = el
  const scrollPos = scrollHeight - scrollTop
  return clientHeight + offset >= scrollPos
}
