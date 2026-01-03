import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aryan Barsaiyan | Portfolio',
  description: 'Self Developed personal website build with Next.js',
  openGraph: {
    title: 'Aryan Barsaiyan | Aryan Barsaiyan Ayodhya | Portfolio',
    description: 'Self Developed personal website build with Next.js',
    url: 'https://abhishekrawat.onrender.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aryan Barsaiyan | rawat_abhi33 | Portfolio',
    description: 'Self Developed personal website build with Next.js',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="preload" href="/Assets/pre.svg" as="image" />
        <link rel="preload" href="/Assets/home-bg-1.jpg" as="image" />
        <link rel="preload" href="/Assets/home-main.svg" as="image" />
      </head>
      <body className={inter.className}>
        <ClientLayout>
          <div className="App">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ClientLayout>
      </body>
    </html>
  )
}

