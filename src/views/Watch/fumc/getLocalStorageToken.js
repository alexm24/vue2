import { TOKEN_KET } from './const'
export const getLocalStorageToken = () => {
  const tokenString = localStorage.getItem(TOKEN_KET)
  if (!tokenString) return {}
  return JSON.parse(tokenString)
}
