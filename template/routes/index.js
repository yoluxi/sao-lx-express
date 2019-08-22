const ListRouter = require('./list')

module.exports = app => {
  app.use('/', ListRouter)
}
