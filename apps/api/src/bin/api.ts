import { Logger, logger, waitForSignal } from '@efreiql/toolbox'
import { connectDatabase } from '@/database'
import { createBusiness } from '@/business'
import { createIamService } from '@/iam/createIamService'
import * as Env from './env'
import { createServer } from '@/graphql/createServer'
import fs from 'fs/promises'

const main = async (logger: Logger) => {
  const database = connectDatabase({
    logger,
    databaseUrl: Env.DATABASE_URL,
    connectionPoolSize: Env.DATABASE_CONNECTION_POOL_SIZE,
    queryTimeout: Env.DATABASE_QUERY_TIMEOUT,
  })

  const iamService = createIamService({
    logger,
    database,
    jwtSecretKey: Env.JWT_SECRET,
    jwtDuration: Env.JWT_DURATION,
  })

  const business = createBusiness({
    logger,
    database,
    iamService,
  })

  const server = await createServer({
    logger,
    business,
    enableDebug: Env.GRAPHQL_DEBUG,
    enableIntrospection: Env.GRAPHQL_ENABLE_INTROSPECTION,
    keepAliveTimeout: Env.GRAPHQL_KEEP_ALIVE_TIMEOUT,
    listenAddr: Env.LISTEN_ADDR,
    mountPath: Env.GRAPHQL_MOUNT_PATH,
    typeDefs: await fs.readFile(Env.GRAPHQL_SCHEMA_PATH, 'utf-8'),
  })

  await database.start()
  await server.start()
  await waitForSignal(['SIGINT', 'SIGTERM'])
  logger.info('API server stopping')
  await server.stop()
  await database.stop()
}

main(logger('efreiql')).catch(err => {
  console.log(err)
  process.exit(1)
})
