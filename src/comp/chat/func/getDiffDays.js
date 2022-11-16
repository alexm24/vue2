export const getDiffDays = (d) => {
  const dt = new Date(d)
  const strDt = dt.toDateString()

  const today = new Date()
  if (today.toDateString() === strDt) return 1

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  if (yesterday.toDateString() === strDt) return 2

  return 3
}
