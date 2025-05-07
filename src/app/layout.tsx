// Root layout – required by the App Router.
// This is identical to the default layout Next.js generates.
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoke-Header PoC',
  description: 'Demo – overriding x-invoke-path to bypass a naïve ACL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
