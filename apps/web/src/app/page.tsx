import { getClient } from '@/lib/urql'
import { SAY_HELLO } from '@/queries'

export default async function Home() {
  const { data, error } = await getClient().query(SAY_HELLO, {})

  if (error) return <div>error</div>

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <h1>{data?.sayHello?.message}</h1>
    </div>
  )
}
