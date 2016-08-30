export default {
  getToken: (auth, code) => {
    const url = [
      'https://slack.com/api/oauth.access',
      '?client_id=' + auth.client_id,
      '&client_secret=' + auth.client_secret,
      '&code=' + code
    ].join('')

    return fetch(url)
      .then(res => res.json())
      .then(resJson => console.log("authService",resJson))
  }
}
