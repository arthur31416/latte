const auth = {
  client_id: '74179321441.74178175045',
  secret: 'YOUR_SECRET',
  scope: 'team%3Aread+users%3Aread', // https://api.slack.com/docs/oauth-scopes
  redirect_uri: 'latte://com.latte.ios' // https://dev.twitter.com/cards/mobile/url-schemes && must match the uri entered on Slack
}

export default auth
