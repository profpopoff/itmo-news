import Image from 'next/image'
import styles from './Post.module.css'

export default function Post({ title, image, date }: { title: string, image: string, date: Date }) {
   return (
      <div className={styles.post}>
         <div className={styles.image}>
            <Image
               className={styles.src}
               src={image}
               fill
               priority
               alt={title}
            />
         </div>
         <div className={styles.headline}>
            <p className={styles.date}>{new Date(date).toLocaleDateString('ru', { year:"numeric", month:"long", day:"numeric"})}</p>
            <h2 title={title}>{title}</h2>
         </div>
      </div>
   )
}