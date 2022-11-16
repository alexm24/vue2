export const isExpiresAt = (exp) => {
  if (!exp) return false
  // random 0-60 min
  const time = Math.floor(Math.random() * 60) * 60000

  const timeEnd = Date.now() + time
  const expiresAt = new Date(exp).getTime()

  return expiresAt > timeEnd
}
