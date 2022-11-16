import { consoleLog } from '@/comp/utils'
export const getJsonToString = (str) => {
  try {
    return JSON.parse(str)
  } catch (e) {
    consoleLog.error(`${e.message} in function ${getJsonToString.name}()`)
  }
  return {}
}
