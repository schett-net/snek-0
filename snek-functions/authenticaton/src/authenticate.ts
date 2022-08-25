import {fn} from './factory'
import {jwt, storage} from './internal/index.js'

const authenticate = fn<
  {username: string; password: string},
  {
    accessToken: string
    refreshToken: string
  }
>(
  async ({username, password}, _, req) => {
    // Does one alias per user really make sense?
    const user = (await storage.queryDatabaseWithIterator(username)) as {
      alias: string
      password: string
    }

    if (username === user.alias && password === user.password) {
      const scope = 'user'

      const jwtAccessToken = jwt.newAccessToken({
        subject: username,
        durration: '1d',
        scope
      })

      const jwtRefreshToken = jwt.newRefreshToken({
        accessToken: jwtAccessToken,
        scope,
        durration: '30d'
      })

      return {
        accessToken: jwtAccessToken,
        refreshToken: jwtRefreshToken
      }
    }

    throw new Error(`Unable to authenticate`)
  },
  {
    name: 'authenticate'
  }
)

export default authenticate
