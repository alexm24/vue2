import { getTimeToStr } from '@/comp/utils'
import { getDiffDays, getDateTime } from './'

export const getDateViewToString = (d) => {
  const isDate = !!d
  if (!isDate) return ''

  const diff = getDiffDays(d)

  if (diff === 1) return getTimeToStr(d)
  if (diff === 2) return `вчера ${getTimeToStr(d)}`
  return getDateTime(d)
}
