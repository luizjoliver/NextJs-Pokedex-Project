import type { Metadata } from 'next'
import { Inter,  Press_Start_2P } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/sideBar'
import Footer from '@/components/footer'


const inter = Inter({ subsets: ['latin'] })

const press_start_2p = Press_Start_2P({
  display:"swap",
  weight:'400',
  variable:"--font-press",
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: 'Pokemon App',
  description: 'Generated by create next app',
  icons:{
    icon:"https://play-lh.googleusercontent.com/HZ16nsxrSsoJoZx0JDJjpmRN2KC0eZRSTyS2O-Lgjw7BgjTU6W8uDSYNj1IMlbqmtQ"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${press_start_2p.variable} `}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
