import {fn} from './factory'
import jwt from "jsonwebtoken"

const secret =  "hiss"
const pingAuth = fn<{}, boolean>(
  async (args, _, {req, res}) => {
    let auth_endpoint

    if( !process.env.IS_OFFLINE ){
      auth_endpoint = "https://" + process.env.CODESPACE_NAME + "-4000.githubpreview.dev/graphql"
    } else {
      auth_endpoint = "https://mhq6yscu56.execute-api.eu-central-1.amazonaws.com/graphql"
    }

    console.log(auth_endpoint)
    console.log(JSON.stringify(req.body))

    let fetchRes = await fetch(auth_endpoint, {
      method: "POST",
      headers: {
        "accept": "application/json, multipart/mixed",
        "content-type": "application/json",
      },
      body: "{\"query\":\"{\\n  ping\\n}\",\"variables\":{},\"extensions\":{\"headers\":{}}}",
    })
    let fetchResJson = await fetchRes.json()

    return fetchResJson.data.ping
  },
  {
    name: 'pingAuth',
    decorators: [async (args, _, {req, res}) => {
      const cookie = req.headers.cookie.split('; ').reduce((prev, current) => {
        const [name, ...value] = current.split('=');
        prev[name] = value.join('=');
        return prev;
      }, {});
      const decodedAccessToken = jwt.verify(cookie.auth_token, secret) as any
      console.log(decodedAccessToken)
      if (!decodedAccessToken){
        throw "Access Denied"
      }

      return null
    }]
  }
)


export default pingAuth
