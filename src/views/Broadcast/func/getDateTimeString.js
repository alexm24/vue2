export const getDateTimeString = (date, hour, minute) => {
  if (!(date instanceof Date && !isNaN(date))) {
    console.log(`Error: not typeof Date in function ${getDateTimeString.name} `)
    return new Date(Date.now()).toISOString()
  }
  return new Date(date.setHours(hour, minute, 0, 0)).toISOString()
}
