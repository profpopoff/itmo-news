import Link from 'next/link'
import styles from './Header.module.css'

import LanguageSelector from '../LanguageSelector/LanguageSelector'

export default function Header() {
   return (
      <header className={styles.header}>
         <div className="container">
            <div className={styles.wrapper}>
               <Link href='/'>
                  <img src="/logo.png" alt="logo" />
               </Link>
               <LanguageSelector />
            </div>
         </div>
      </header>
   )
}
