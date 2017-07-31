const express = require('express')
const next = require('next')
const graphqlHTTP = require('express-graphql')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const appGraphQLSchema = require('./gq/scheme');

app.prepare()
.then(() => {
  const server = express()

  server.use('/graphql', graphqlHTTP({
    schema: appGraphQLSchema
  }))

  server.use('/graphiql', graphqlHTTP({
    schema: appGraphQLSchema,
    graphiql: true
  }))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
