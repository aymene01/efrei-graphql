import http from 'node:http'
import { promisify } from 'node:util'

import cors from 'cors'
import express from 'express'
import { partial } from 'lodash'

import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'

import { resolvers } from './resolvers'
import { createContext } from './context'
import { Context, Options, Server } from './types'

export const createServer = async (opts: Options): Promise<Server> => {
  const app = express()
  const httpServer = http.createServer(app)

  const context = partial(createContext, opts)

  const server = new ApolloServer<Context>({
    typeDefs: opts.typeDefs,
    resolvers,
    introspection: opts.enableIntrospection,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  await server.start()

  app.use(
    opts.mountPath,
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => context(req, res),
    }),
  )

  httpServer.keepAliveTimeout = opts.keepAliveTimeout

  return {
    server,
    start: async () => {
      const {
        listenAddr: { host, port },
        mountPath,
      } = opts
      await new Promise<void>(resolve => {
        httpServer.listen({ port }, resolve)
      })
      opts.logger.info(`🚀 Server ready at http://${host}:${port}${mountPath}`)
    },
    stop: async () => {
      await server.stop()
      await promisify(httpServer.close).bind(httpServer)()
    },
  }
}
