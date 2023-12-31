import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wujciak Florentin Website',
  description: "See Wujciak Florentin's website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=5.0"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
