import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import "leaflet/dist/leaflet.css";
import { TitleAnimator } from "@/components/TitleAnimator";
import { FaviconAnimator } from "@/components/Dyanmicfavicon";



const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ['300', '400', '500', '600']
})

export const metadata: Metadata = {
  title: "manya",

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
          <TitleAnimator />
          <FaviconAnimator />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
