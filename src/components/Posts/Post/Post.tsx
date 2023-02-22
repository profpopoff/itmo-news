import Image from 'next/image'
import Link from 'next/link'
import styles from './Post.module.css'

export default function Post({ id, title, image, date }: { id: number, title: string, image: string, date: Date }) {
   return (
      <Link href={`/event/${id}`} className={styles.post}>
         <div className={styles.image}>
            <Image
               className={styles.src}
               src={image}
               fill
               priority
               sizes="(max-width: 557px) 100vw,(max-width: 848px) 50vw, 33vw"
               alt={title}
            />
         </div>
         <div className={styles.headline}>
            <p className={styles.date}>{new Date(date).toLocaleDateString('ru', { year: "numeric", month: "long", day: "numeric" })}</p>
            <h2 title={title}>{title}</h2>
         </div>
      </Link>
   )
}