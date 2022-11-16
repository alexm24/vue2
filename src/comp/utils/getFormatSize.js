export const getFormatSize = (size) => {
  const sizeK = Math.round(size / 1000)
  if (sizeK === 0) return ''
  if (sizeK < 1000) return `${sizeK}K`
  const sizeM = Math.round(sizeK / 1000)
  return `${sizeM}M`
}
