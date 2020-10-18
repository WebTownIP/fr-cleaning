module.exports = ({ database, server }) => {
  return {
    start: () =>
      Promise
        .resolve()
        .then(database.connect())
        .then(server.start)
  }
}
