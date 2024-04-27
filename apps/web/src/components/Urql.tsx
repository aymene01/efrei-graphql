'use client'

import { useMemo } from 'react'
import { UrqlProvider, ssrExchange, fetchExchange, createClient } from '@urql/next'

export default function Layout({ children }: React.PropsWithChildren) {
  const [client, ssr] = useMemo(() => {
    const client = createClient({
      url: 'http://localhost:8080/api/v1',
      exchanges: [fetchExchange],
      suspense: true,
    })

    return [client]
  })

  return <UrqlProvider client={client}>{children}</UrqlProvider>
}
