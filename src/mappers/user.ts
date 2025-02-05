import { ApiUserTokens } from 'types/api/user'
import { UserTokens } from 'types/store/user'

export const mapToUserTokens = (tokens: ApiUserTokens): UserTokens => {
  return {
    token: tokens.jwt.token,
    refreshToken: tokens.jwt.refreshToken,
  }
}
