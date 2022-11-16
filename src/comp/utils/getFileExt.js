export const getFileExt = (name) => {
  if (name.length === 0) return ''
  const pPoz = name.lastIndexOf('.')
  if (pPoz === -1) return ''
  const ext = name.substr(pPoz)
  if (ext.length > 5) return ''
  return ext
}
