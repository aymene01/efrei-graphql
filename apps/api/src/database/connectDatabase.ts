import { DatabaseOption } from './types'
import { getPrisma } from '@/lib/prisma'

export function connectDatabase(opts: DatabaseOption) {
  const url = new URL(opts.databaseUrl)

  url.searchParams.append('connection_limit', `${opts.connectionPoolSize}`)
  url.searchParams.append('pool_timeout', `${opts.queryTimeout}`)

  const prisma = getPrisma(opts.databaseUrl)

  return {
    prisma,
    start: async () => {
      await prisma.$connect()
      opts.logger.info('🔌 Successfully connected to the database.')
    },
    stop: async () => {
      await prisma.$disconnect()
    },
  }
}
