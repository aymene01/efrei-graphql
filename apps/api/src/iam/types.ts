import { Database } from '@/database/types'
import { Logger } from '@efreiql/toolbox'

export type Options = {
  logger: Logger
  database: Database
  jwtSecretKey: string
  // in ms
  jwtDuration: number
}
