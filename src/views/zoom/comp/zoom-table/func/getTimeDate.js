import { consoleLog } from '@/comp/utils'
export const getTimeDate = (date) => {
  const time = new Date(date).toLocaleString()

  if (time === 'Invalid Date') {
    consoleLog.error(`Error: ${time} in function ${getTimeDate.name}\``)
    return ''
  }

  const arrDateTime = time.split(',')

  if (arrDateTime.length !== 2) {
    consoleLog.error(`Error: ${arrDateTime} in function ${getTimeDate.name}\``)
    return ''
  }

  const arrTime = arrDateTime[1].split(':')
  const t = `${arrTime[0]}:${arrTime[1]}`

  const arrDate = arrDateTime[0].split('.')
  const yy = arrDate[2].substr(2, 2)
  const d = `${arrDate[0]}.${arrDate[1]}.${yy}`

  return `${t} ${d}`
}
