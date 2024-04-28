import { getClient } from '@/lib/urql'
import { SAY_HELLO } from '@/queries'
import { extractGraphqlError } from '@/utils/extractGraphqlError'

export default async function Home() {
  const { data, error } = await getClient().query(SAY_HELLO, {})

  if (error) {
    return <h1>{extractGraphqlError(error)}</h1>
  }

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <h1>{data?.sayHello?.message}</h1>
    </div>
  )
}
