import Providers from '@/lib/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import CommonHeader from '@/components/ui/Header';
import CommonFooter from '@/components/ui/Footer';
import toast, { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          <CommonHeader></CommonHeader>
          {children}
          <CommonFooter></CommonFooter>

        </body>
      </html>
    </Providers>
  )
}
