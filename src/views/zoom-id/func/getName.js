export const getName = (item) => {
  const isItem = !!item
  if (!isItem) return ''
  return item.substr(item.lastIndexOf('/') + 1)
}
