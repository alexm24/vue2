export const getSpanX = (text) => {
  switch (text.length) {
    case 1:
      return 6
    case 3:
      return 4
    case 4:
      return 1
    default:
      return 3
  }
}
