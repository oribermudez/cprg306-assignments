import './globals.css'
import { Inter } from 'next/font/google'
import { AuthContextProvider } from "./week8/_utils/auth-context";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ori Bermudez',
  description: 'Web Development Assigments page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={`${inter.className} bg-white text-black`}>{children}</body>
      </AuthContextProvider>
    </html>
  )
}
