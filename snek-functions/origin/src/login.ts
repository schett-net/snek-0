import { fn } from './factory'

const login = fn<{ username: string; password: string }, boolean>(
  async (args, _, { req }) => {
    console.log("process.env.CODESPACE_NAME")
    console.log(process.env.CODESPACE_NAME)

    // proxyTo(url)
    let res = await fetch('https://kleberbaum-snek-at-jaen-template-4vv5wq9jfx6q-4000.githubpreview.dev/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: req.body,
    })

    // const url = "https://mhq6yscu56.execute-api.eu-central-1.amazonaws.com/graphql"

    // const res = await fetch(url, {
    //   method: 'POST',
    //   body: req.body
    // })

    return res.json()

  },
  {
    name: 'login',
    decorators: []
  }
)

export default login
