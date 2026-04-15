import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Beyond Grade 12 | Where Ambition Meets Direction',
  description: 'Premium, expert-led platform for high school students (Grades 9-12) to gain clarity, confidence, and direction for careers and top university admissions.',
  keywords: ['career guidance', 'university admissions', 'high school students', 'mentorship', 'college prep'],
  authors: [{ name: 'Beyond Grade 12' }],
  openGraph: {
    title: 'Beyond Grade 12 | Where Ambition Meets Direction',
    description: 'Expert-led guidance for high school students seeking clarity on careers and university admissions.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1F3A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-ivory`}>
      <body className="font-sans antialiased text-charcoal">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
