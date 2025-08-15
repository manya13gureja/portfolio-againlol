import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import "leaflet/dist/leaflet.css";


const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ['300', '400', '500', '600']
})

export const metadata: Metadata = {
  title: "Your Name - Product Designer & Frontend Engineer",
  description: "Product designer and frontend engineer crafting digital experiences that are both beautiful and functional.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
