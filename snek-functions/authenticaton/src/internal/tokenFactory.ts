import jwt from 'jsonwebtoken'
import * as crypto from 'node:crypto'

const secret = '<your-service-secret>'

export const newAccessToken = (payload: {
  subject: string
  scope: string
  durration?: string
  fresh?: boolean
}) => {
  let jwtId: string = crypto.randomUUID()

  let accessToken: string = jwt.sign(
    {
      scope: payload.scope,
      fresh: !!payload.fresh,
      type: 'access'
    },
    secret,
    {
      // The issuer can freely set an algorithm to verify the signature on the token. However, some supported algorithms are insecure
      // HMAC using SHA-256 hash algorithm
      algorithm: 'HS256',

      // Identifies the subject of the JWT
      subject: payload.subject,
      // Identifies the expiration time on and after which the JWT must not be accepted for processing. The value must be in seconds or a string describing a time span vercel/ms
      expiresIn: payload.durration,

      // Identifies principal that issued the JWT
      issuer: 'snek-0',
      // Case-sensitive unique identifier of the token even among different issuers
      jwtid: jwtId,
      audience: ''
    }
  )

  return accessToken
}

export const newRefreshToken = (payload: {
  accessToken: string
  scope: string
  durration?: string
}) => {
  // verify a token symmetric
  const decodedAccessToken = jwt.verify(
    payload.accessToken,
    secret
  ) as jwt.JwtPayload

  let refreshToken: string = jwt.sign(
    {
      type: 'refresh',
      scope: payload.scope
    },
    secret,
    {
      // The issuer can freely set an algorithm to verify the signature on the token. However, some supported algorithms are insecure
      // HMAC using SHA-256 hash algorithm
      algorithm: 'HS256',

      // Identifies the subject of the JWT
      subject: decodedAccessToken.sub,
      // Identifies the expiration time on and after which the JWT must not be accepted for processing. The value must be in seconds or a string describing a time span vercel/ms
      expiresIn: payload.durration,

      // Identifies principal that issued the JWT
      issuer: 'snek-0',
      // Case-sensitive unique identifier of the token even among different issuers
      jwtid: decodedAccessToken.jti
    }
  )

  return refreshToken
}

export const refreshAccessToken = (payload: {
  refreshToken: string
  durration?: string
}) => {
  let jwtId: string = crypto.randomUUID()
  // verify a token symmetric
  const decodedRefreshToken = jwt.verify(
    payload.refreshToken,
    secret
  ) as jwt.JwtPayload

  const accessToken = newAccessToken({
    subject: decodedRefreshToken.sub || '',
    scope: decodedRefreshToken.scope,
    durration: payload.durration,
    fresh: false
  })

  const refreshToken = newRefreshToken({
    accessToken: accessToken,
    scope: decodedRefreshToken.scope,
    durration: payload.durration
  })

  return {
    accessToken: accessToken,
    refreshToken: refreshToken
  }
}
