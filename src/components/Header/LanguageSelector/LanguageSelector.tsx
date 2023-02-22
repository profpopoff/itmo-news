import { selectLanguage, setLanguage } from '@/redux/slices/language'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './LanguageSelector.module.css'

export default function LanguageSelector() {

   const currentLanguage = useSelector(selectLanguage)
   const dispatch = useDispatch()

   const [isAcrive, setIsActive] = useState(false)

   const optionsRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const checkIfClickedOutside = (event: MouseEvent) => {
         if (isAcrive && optionsRef.current && !optionsRef.current.contains(event.target as HTMLInputElement)) {
            setIsActive(!isAcrive)
         }
      }

      document.addEventListener("mousedown", checkIfClickedOutside)

      return () => {
         document.removeEventListener("mousedown", checkIfClickedOutside)
      }
   }, [isAcrive])

   const handleChange = (event: React.FormEvent<HTMLDivElement>) => {
      dispatch(setLanguage((event.target as HTMLInputElement).value))
   }

   return (
      <div className={!isAcrive ? styles.select : `${styles.select} ${styles.active}`} ref={optionsRef}>
         <button className={styles.selectButton} onClick={() => setIsActive(!isAcrive)}>
            {currentLanguage === 'Рус' && <img className={styles.flag} src="/russia.png" alt="Russian flag" />}
            {currentLanguage === 'Eng' && <img className={styles.flag} src="/uk.png" alt="United Kingdom flag" />}
            <span>{currentLanguage}</span>
            <img className={styles.arrow} src="/arrow.svg" alt="arrow" />
         </button>
         <div className={styles.options} onChange={handleChange}>
            <div className={styles.option}>
               <input className={styles.radio} id="eng"
                  type="radio" name="language" value="Eng"
                  defaultChecked={currentLanguage === 'Eng'} />
               <label className={styles.label} htmlFor="eng">
                  <img className={styles.flag} src="/uk.png" alt="Russian flag" />
                  <span>Eng</span>
               </label>
            </div>
            <div className={styles.option}>
               <input className={styles.radio} id="rus"
                  type="radio" name="language" value="Рус"
                  defaultChecked={currentLanguage === 'Рус'} />
               <label className={styles.label} htmlFor="rus">
                  <img className={styles.flag} src="/russia.png" alt="Russian flag" />
                  <span>Рус</span>
               </label>
            </div>
         </div>
      </div>
   )
}