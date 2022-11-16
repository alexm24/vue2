import { TOKEN_KET } from './'
export const setLocalStorageToken = (accessToken, exp) => {
  const expiresAt = new Date(exp).toISOString()
  const token = { accessToken, exp: expiresAt }
  localStorage.setItem(TOKEN_KET, JSON.stringify(token))
}
