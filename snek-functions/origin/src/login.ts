import {authenticate} from '@snek-functions/authenticaton'

import {fn} from './factory'

import {setAuthenticationCookies} from './helper/auth.js'

const login = fn<{username: string; password: string}, void>(
  async (args, _, {res}) => {
    const {data, errors} = await authenticate.execute(args)

    if (errors.length > 0) {
      throw new Error(`Unable to authenticate: ${errors[0].message}`)
    }

    if (data) {
      const accessToken = data.accessToken
      const refreshToken = data.refreshToken

      setAuthenticationCookies(res, accessToken, refreshToken)
    }
  },
  {
    name: 'login',
    decorators: []
  }
)

export default login
