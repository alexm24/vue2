export const getFileName = (name) => {
  if (name.length === 0) return ''
  const pPoz = name.lastIndexOf('.')
  if (pPoz === -1) return name
  const filename = name.substr(0, pPoz)
  const ext = name.substr(pPoz)
  if (ext.length > 5) return name
  return filename
}
