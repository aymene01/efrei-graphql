import { Logger } from '@efreiql/toolbox'
import { connectDatabase } from './connectDatabase'

export type DatabaseOption = {
  logger: Logger
  databaseUrl: string
  connectionPoolSize: number
  queryTimeout: number
}

export type Database = Awaited<ReturnType<typeof connectDatabase>>
