import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'
import { WalletContextProvider } from './providers/WalletProvider'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'LuckyHaus - Solana Lottery 🎰',
  description: 'LuckyHaus is your premier Solana lottery dApp — buy tickets, watch the pot grow, and win big! Join the most exciting lottery on Solana.',
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    'cache-control': 'no-cache, no-store, must-revalidate',
    'pragma': 'no-cache',
    'expires': '0',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} font-inter`}>
        <WalletContextProvider>
          {children}
          {/* Footer */}
          <footer className="px-4 py-8 border-t border-gray-800 bg-gray-900">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </a>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </a>
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>© 2026 VAIIYA</span>
                <span>•</span>
                <a
                  href="https://vaiiya.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Built on Solana
                </a>
              </div>
            </div>
          </footer>
        </WalletContextProvider>
      </body>
    </html>
  )
} 