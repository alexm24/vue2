export const getBroadcast = (data) => {
  if (!data) return {}
  return data.reduce((a, e) => ({ ...a, [e.id]: e }), {})
}
