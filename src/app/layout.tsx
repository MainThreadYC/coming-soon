import './globals.css'
import { JetBrains_Mono } from 'next/font/google'

const inter = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'MainThread',
  description: 'Coming Soon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
