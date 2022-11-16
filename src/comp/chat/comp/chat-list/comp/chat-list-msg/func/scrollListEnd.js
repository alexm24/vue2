import { setScrollEnd } from './setScrollEnd.ts'

/**
 * Устанавливает прокрутку до конца, если сообщение пользовательское
 * или позиция прокрутки находится в конце, в противном случае ничего не делает
 *
 * @param {HTMLElement} el - html элемент
 * @param {Object} items - список сообщений
 * @param {string} user - owner
 * @param {Boolean} isScrollBottom - true если позиция скролла внизу
 */
export const scrollListEnd = (el, items, user, isScrollBottom) => {
  if (!el || !items) return
  const itemsKeyArr = Object.keys(items)
  const len = itemsKeyArr.length
  if (!len) return
  const { username } = items[itemsKeyArr[len - 1]]

  if (username === user || isScrollBottom) setScrollEnd(el)
}
