import {makeFn} from '@snek-at/functions'

export const url = process.env.IS_OFFLINE
  ? process.env.CODESPACE_NAME
    ? `https://${process.env.CODESPACE_NAME}-4000.githubpreview.dev/graphql`
    : 'http://localhost:4000/graphql'
  : 'https://mhq6yscu56.execute-api.eu-central-1.amazonaws.com/graphql'

export const fn = makeFn({
  url
})
