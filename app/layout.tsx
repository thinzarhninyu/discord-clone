import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { cn } from '@/lib/utils'
import { ModalProvider } from '@/components/providers/modal-provider'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord 2.0',
  description: 'Discord clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(
          font.className,
          "bg-white dark:bg-[#313338]"
        )}>
          <div>
            <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={true} storageKey='discord-theme'>
              <ModalProvider />
              {children}
            </ThemeProvider>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
