/**
 * Возвращает функцию, которая, пока она продолжает вызываться, не будет запускаться.
 * Она будет вызвана один раз через N миллисекунд после последнего вызова.
 * Если передано аргумент `immediate` (true), то она запустится сразу же при
 * первом запуске функции.
 *
 * @param { function } func - функция которую нужно вызывать;
 * @param { number} wait - миллисекунды;
 * @param {boolean} immediate - (true), то она запустится сразу же при первом запуске функции;
 *
 */

export function debounce(func, wait, immediate = false) {
  let timeout

  return function executedFunction() {
    const context = this
    const args = arguments

    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }

    const callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(later, wait)

    if (callNow) func.apply(context, args)
  }
}
