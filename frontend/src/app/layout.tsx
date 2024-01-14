import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Book Store',
  description: 'Book Store Project',
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
