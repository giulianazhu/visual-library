import { AuthenticationTokens } from 'types/api/user'

export interface UserTokens {
  token: AuthenticationTokens['token']
  refreshToken: AuthenticationTokens['refreshToken']
}
