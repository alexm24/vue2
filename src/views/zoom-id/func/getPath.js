import { URL } from '@/const'
export const getPath = (item) => {
  const isItem = !!item
  if (!isItem) return ''
  return `${URL.CDN_ZOOM}${item.substr(32, item.length)}`
}
