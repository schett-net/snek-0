import {fn} from './factory'

const authenticate = fn<{username: string; password: string}, boolean>(
  async (args, _, {req, res}) => {

    // console.log(req.body)

    let auth_endpoint

    //console.log(req.body)
    //console.log(req.headers)
    // console.log("process.env.CODESPACE_NAME")
    // console.log(process.env.CODESPACE_NAME)

    if( !process.env.IS_OFFLINE ){
      auth_endpoint = "https://" + process.env.CODESPACE_NAME + "-4000.githubpreview.dev/graphql"
    } else {
      auth_endpoint = "https://mhq6yscu56.execute-api.eu-central-1.amazonaws.com/graphql"
    }

    console.log(auth_endpoint)
    console.log(JSON.stringify(req.body))

    // proxyTo(url)
    let fetchRes = await fetch(auth_endpoint, {
      method: "POST",
      headers: {
        "accept": "application/json, multipart/mixed",
        "content-type": "application/json",
      },
      body: JSON.stringify(req.body)
    })
    let fetchResJson = await fetchRes.json()

    if (fetchResJson) {
      res.cookie(
        'auth_token',
        JSON.parse(fetchResJson.data.authenticate).token,
        {
          httpOnly: true,
          secure: true,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
        }
      )
      res.cookie(
        'auth_refresh_token',
        JSON.parse(fetchResJson.data.authenticate).token,
        {
          httpOnly: true,
          secure: true,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
        }
      )
    }

    return JSON.parse(fetchResJson.data.authenticate)
  },
  {
    name: 'authenticate',
    decorators: []
  }
)

export default authenticate


// import {fn} from './factory'
// import {authenticate as auth} from './internal/index.js'

// const authenticate = fn<{username: string; password: string}, boolean>(
//   async (args, _, req) => {

//     const res = await auth({user: args.username, password: args.password, token: ""})

//     console.log(res)

//     return res
    
//   },
//   {
//     name: 'authenticate'
//   }
// )

// export default authenticate
