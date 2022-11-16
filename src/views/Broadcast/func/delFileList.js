export const delFileList = (index, stateFiles) => {
  const isStateFiles = !!stateFiles
  if (!isStateFiles) return null
  const lenStateFiles = stateFiles.length
  if (lenStateFiles === 0) return null
  const dt = new DataTransfer()
  for (let i = 0; i < lenStateFiles; i++) {
    if (i !== index) dt.items.add(stateFiles[i])
  }
  return dt.files
}
