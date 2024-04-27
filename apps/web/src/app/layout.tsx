import Providers from '@/components/Providers'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Providers>{children}</Providers>
    </html>
  )
}
