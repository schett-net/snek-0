import getServerlessApp from '@snek-at/functions/dist/server/getServerlessApp.js'

export async function handler(event, context) {
  // console.log(`event ${JSON.stringify(event)}`)
  // console.log(`context ${JSON.stringify(context)}`)

  return await getServerlessApp({
    functions: '.'
  })(event, {})
}
