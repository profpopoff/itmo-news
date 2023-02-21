import '../styles/globals.css'
import Header from '../components/Header/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
