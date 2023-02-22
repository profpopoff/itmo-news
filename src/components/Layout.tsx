import Head from 'next/head'
import Header from './Header/Header'

export default function Layout({ children, title }:
   { children: React.ReactNode, title?: string }) {
   return (
      <>
         <Head>
            <title>{`${!!title ? title + ' | ' : ''}ITMO News`}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
         </Head>
         <Header />
         <main className='container'>{children}</main>
      </>
   )
}