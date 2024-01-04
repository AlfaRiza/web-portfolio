import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/main/Navbar'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alfa Riza - Personal Website',
  description: 'Personal Website for My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-primary overflow-y-scroll overflow-x-hidden `}
      >
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
