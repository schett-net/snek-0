import {Decorator} from '@snek-at/functions'
import {refresh} from '@snek-functions/authenticaton'
import jwt from 'jsonwebtoken'

import {
  REFRESH_TOKEN_COOKIE_NAME,
  SHARED_SECRET,
  TOKEN_COOKIE_NAME
} from '../constants.js'
import {setAuthenticationCookies} from '../helper/auth.js'

const loginRequired: Decorator = async (args, _, {req, res}) => {
  const tokenCookie = req.cookies[TOKEN_COOKIE_NAME]
  const refreshCookie = req.cookies[REFRESH_TOKEN_COOKIE_NAME]

  let tokenPayload: string | null
  let refreshTokenPayload: string | null

  try {
    tokenPayload = jwt.verify(tokenCookie, SHARED_SECRET) as string
  } catch {
    tokenPayload = null
  }

  if (tokenPayload) {
    return
  }

  try {
    refreshTokenPayload = jwt.verify(refreshCookie, SHARED_SECRET) as string
  } catch {
    refreshTokenPayload = null
  }

  if (refreshTokenPayload) {
    const {data, errors} = await refresh.execute({
      refreshToken: refreshCookie
    })

    if (errors.length === 0 && data) {
      const accessToken = data.accessToken
      const refreshToken = data.refreshToken

      setAuthenticationCookies(res, accessToken, refreshToken)

      return
    }
  }

  throw new Error('Access Denied')
}

export default loginRequired
