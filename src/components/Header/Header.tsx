import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './Header.module.css'

import LanguageSelector from './LanguageSelector/LanguageSelector'

export default function Header() {

   const pathname = usePathname()

   return (
      <header className={styles.header}>
         <div className="container">
            <div className={styles.wrapper}>
               <Link href='/' className={styles.logo}>
                  <img src="/logo.png" alt="logo" />
               </Link>
               {pathname === '/' && <LanguageSelector />}
            </div>
         </div>
      </header>
   )
}
