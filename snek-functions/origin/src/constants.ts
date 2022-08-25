export const SHARED_SECRET = '<your-service-secret>'
export const TOKEN_COOKIE_NAME = 'T'
export const REFRESH_TOKEN_COOKIE_NAME = 'RT'

export const LOGIN_COOKIE_SECURE = true
export const LOGIN_COOKIE_SAME_SITE = 'lax'
export const LOGIN_COOKIE_PATH = '/'
export const LOGIN_COOKIE_DOMAIN =
  `${process.env.CODESPACE_NAME}-5000.githubpreview.dev` || 'localhost'
export const LOGIN_COOKIE_HTTP_ONLY = true

export const LOGIN_TOKEN_COOKIE_MAX_AGE = 60 * 15 // 15 minutes
export const LOGIN_REFRESH_TOKEN_COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // 7 days

export const COOKIE_OPTIONS: {
  httpOnly: boolean
  secure: boolean
  sameSite: boolean | 'strict' | 'lax' | 'none' | undefined
  path: string
  domain: string
} = {
  httpOnly: LOGIN_COOKIE_HTTP_ONLY,
  secure: LOGIN_COOKIE_SECURE,
  sameSite: LOGIN_COOKIE_SAME_SITE,
  path: LOGIN_COOKIE_PATH,
  domain: LOGIN_COOKIE_DOMAIN
}