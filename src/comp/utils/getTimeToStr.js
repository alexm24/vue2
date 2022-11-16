import { consoleLog } from '.'
export const getTimeToStr = (date) => {
  const time = new Date(date).toLocaleTimeString()
  if (time.length > 8) {
    consoleLog.error(`Error: ${time} in function ${getTimeToStr.name}`)
    return '00:00'
  }
  const timeArr = time.split(':')
  return `${timeArr[0]}:${timeArr[1]}`
}
