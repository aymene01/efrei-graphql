'use client'

import { useQuery } from 'urql'
import { SAY_HELLO } from '@/queries'
import { extractGraphqlError } from '@/utils/extractGraphqlError'

export default function client() {
  const [{ data, fetching, error }] = useQuery({ query: SAY_HELLO })

  if (fetching) return <div>loading...</div>

  if (error) return <div>{extractGraphqlError(error)}</div>

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="text-3xl">Hello {data?.sayHello.message}</div>
    </div>
  )
}
