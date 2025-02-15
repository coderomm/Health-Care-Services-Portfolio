import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kamlesh Sen',
  description: 'Kamlesh Sen - Educational Consultant | Nursing Professional | Healthcare Services Provider',
  generator: 'Kamlesh Sen',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
