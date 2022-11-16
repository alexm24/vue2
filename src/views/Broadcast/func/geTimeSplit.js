export const geTimeSplit = (time) => {
  const regexp = /^[\d]{2}:[\d]{2}$/
  if (!regexp.test(time)) {
    console.log(`Error: time in function ${geTimeSplit.name}`)
    return { hour: 0, minute: 0 }
  }
  const timeArr = time.split(':')
  const hour = Number(timeArr[0])
  const minute = Number(timeArr[1])
  return { hour, minute }
}
