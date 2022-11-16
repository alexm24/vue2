import { getTimeToStr } from '@/comp/utils'
import { getMonthToString } from './'
export const getDateTime = (d) => {
  const dt = new Date(d)
  const day = dt.getDay()
  const month = getMonthToString(dt.getMonth())
  const year = dt.getFullYear()
  return `${day} ${month} ${year} ${getTimeToStr(d)}`
}
