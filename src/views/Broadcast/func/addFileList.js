export const addFileList = (files, stateFiles) => {
  const isFiles = !!files
  const isStateFiles = !!stateFiles

  if (!isFiles) return stateFiles
  const lenFiles = files.length
  if (lenFiles === 0) return stateFiles

  const dt = new DataTransfer()
  for (let i = 0; i < lenFiles; i++) {
    if (!isStateFiles) dt.items.add(files[i])
    else {
      let isFile = false
      for (let j = 0; j < stateFiles.length; j++) {
        if (stateFiles[j].name === files[i].name) {
          isFile = true
          break
        }
      }
      if (!isFile) dt.items.add(files[i])
    }
  }
  if (!isStateFiles) return dt.files
  const lenStateFiles = stateFiles.length

  if (lenStateFiles === 0) return dt.files
  for (let i = 0; i < lenStateFiles; i++) dt.items.add(stateFiles[i])
  return dt.files
}
