const month = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
]
export const getFormatDate = (dat) => {
  const date = new Date(dat)
  const d = date.getDate()
  const m = date.getMonth()
  const y = date.getFullYear()
  return `${d} ${month[m]} ${y}`
}
