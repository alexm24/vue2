import { getName, getPath } from './'
export const getFiles = (items) => {
  return items.reduce((a, e) => {
    const type = e.file_type
    const size = e.file_size
    const path = getPath(e.file_path)
    const name = getName(e.file_path)
    return [...a, { type, size, path, name }]
  }, [])
}
