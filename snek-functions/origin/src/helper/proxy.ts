import {Request} from 'express'
import {TOKEN_COOKIE_NAME} from '../constants.js'

export async function proxyRequest(
  fetchParams: Parameters<typeof fetch>,
  req: Request
) {
  const [input, init] = fetchParams
  const headers: Headers = new Headers(init?.headers)

  appendAuthorizationHeader(req, headers)

  if (!isWhitelisted(input)) {
    throw new Error(`URL is not whitelisted`)
  }

  const fetchRes = await fetch(input, {
    ...init,
    headers
  })

  return fetchRes
}

function appendAuthorizationHeader(req: Request, headers: Headers) {
  const token = req.cookies[TOKEN_COOKIE_NAME]

  if (token) {
    headers.append('Authorization', `Bearer ${token}`)
  }
}

function isWhitelisted(input: RequestInfo | URL) {
  const FETCH_PROXY_WHITELIST = ['https://api.github.com']

  const url = input.toString()
  if (!FETCH_PROXY_WHITELIST.some(whitelist => url.startsWith(whitelist))) {
    return false
  }

  return true
}
