import UrqlProvider from './Urql'

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <UrqlProvider>
      <body>{children}</body>
    </UrqlProvider>
  )
}
