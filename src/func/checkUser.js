import { consoleLog } from '@/comp/utils'

export const checkUser = ({ username, email, fullname }) => {
  if (!username) consoleLog.error('error: Keycloak username field is empty')
  if (!email) consoleLog.error('error: Keycloak email field is empty')
  if (!fullname) consoleLog.error('error: Keycloak fullname field is empty')
}
