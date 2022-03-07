const users = [
  {
    username: 'calvin',
    password: 123
  },
  {
    username: 'kelvin',
    password: 321
  }
]

module.exports = {
  login: credentials => {
    const result = users.find(
      ({ username, password }) =>
        (username === credentials.username) &
        (password === credentials.password)
    )
    console.log(result)
    if (result === undefined) {
      return {
        hasError: true,
        statusCode: 404
      }
    } else {
      return 'Autenticação válida'
    }
  }
}
