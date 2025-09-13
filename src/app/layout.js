import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IndustrialTech Solutions - Premium Industrial Equipment Supplier',
  description: 'Leading supplier of industrial and engineering equipment. We ship from USA, China to Nigeria and worldwide. Quality equipment, competitive prices, reliable service.',
  keywords: 'industrial equipment, engineering tools, machinery, Nigeria, USA, China, import, export',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}