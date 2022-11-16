export const getReactions = (obj) => {
  const reactions = new Map()
  Object.keys(obj).forEach((val) => {
    if (reactions.has(obj[val])) {
      const key = obj[val]
      reactions.set(key, reactions.get(key) + 1)
    } else {
      reactions.set(obj[val], 1)
    }
  })
  return reactions
}
