'use client'

import { useUser, SignOutButton, UserButton } from '@clerk/nextjs'

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }

  return (
    <div className="flex w-full h-screen justify-center items-center flex-col">
      <h1>{user.username}</h1>
      <UserButton />
      <SignOutButton />
    </div>
  )
}
