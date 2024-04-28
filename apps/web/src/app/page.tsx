import { getClient } from '@/lib/urql'
import { SAY_HELLO } from '@/queries'
import { extractGraphqlError } from '@/utils/extractGraphqlError'
import { currentUser } from '@clerk/nextjs/server'
import { SignOutButton } from '@clerk/nextjs'

export default async function Home() {
  const { data, error } = await getClient().query(SAY_HELLO, {})

  const user = await currentUser()

  if (error) {
    return <h1>{extractGraphqlError(error)}</h1>
  }

  return (
    <div className="flex w-full h-screen justify-center items-center flex-col">
      <h1>{data?.sayHello?.message}</h1>
      <p>
        Welcome {user?.firstName} {user?.lastName}
      </p>
      <SignOutButton />
    </div>
  )
}
