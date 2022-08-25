import { fn } from './factory'
import { jwt } from './internal/index.js'
import { TokenPair } from './types'

const refresh = fn<
  {
    refreshToken: string
  },
  TokenPair
>(
  async (args, _, req) => {
    const tokens = jwt.refreshAccessToken({
      refreshToken: args.refreshToken,
      durration: '30d'
    })

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken
    }
  },
  {
    name: 'refresh'
  }
)

export default refresh
