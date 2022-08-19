addEventListener('fetch', event => {
    event.respondWith(handleEvent(event))
});
  
async function handleEvent(event) {
    const getServerlessApp = await import('@snek-at/functions/dist/server/getServerlessApp.js')

    let awsevent = {
        "version": "2.0",
        "routeKey": "$default",
        "rawPath": "/graphql",
        "rawQueryString": "",
        "cookies": [],
        "headers": {
          "host": "localhost",
        },
        "queryStringParameters": null,
        "requestContext": {
          "accountId": "offlineContext_accountId",
          "apiId": "offlineContext_apiId",
          "authorizer": {
            "jwt": {}
          },
          "domainName": "offlineContext_domainName",
          "domainPrefix": "offlineContext_domainPrefix",
          "http": {
            "method": "GET",
            "path": "/graphql",
            "protocol": "HTTP/1.1",
            "sourceIp": "127.0.0.1",
            "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
          },
          "requestId": "offlineContext_resourceId",
          "routeKey": "$default",
          "stage": "$default",
          "time": "17/Aug/2022:09:45:38 +0000",
          "timeEpoch": 1660729538241
        },
        "body": null,
        "pathParameters": {
          "default": "graphql"
        },
        "isBase64Encoded": false
      }
    
    console.log(event)

    return await getServerlessApp({
        functions: '.'
    })(awsevent, {})
    

    // return new Response(`Do warat es echt cool wenn da origin worken tat :D`, { status: 200 })
}