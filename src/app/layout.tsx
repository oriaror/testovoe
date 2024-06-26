import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/HeaderComponent/Header'
import Footer from '@/components/FooterComponent/Footer'
import GlobalStyles from '@/components/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'

export const metadata: Metadata = {
  title: 'Pay System',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
