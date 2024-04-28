import UrqlProvider from './Urql'
import { ClerkProvider } from '@clerk/nextjs'

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <UrqlProvider>
        <body>{children}</body>
      </UrqlProvider>
    </ClerkProvider>
  )
}
