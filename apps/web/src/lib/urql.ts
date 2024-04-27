import { createClient, fetchExchange } from '@urql/core'
import { registerUrql } from '@urql/next/rsc'

const makeClient = () => {
  return createClient({
    url: 'http://localhost:8080/api/v1',
    exchanges: [fetchExchange],
  })
}

export const { getClient } = registerUrql(makeClient)
