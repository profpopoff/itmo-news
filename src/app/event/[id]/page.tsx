import { Post } from "@/interfaces/Post"
import parse from 'html-react-parser'
import Image from "next/image"

import styles from './event.module.css'

async function getData(id: number) {
  const res = await fetch('https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=9', { cache: "no-store" })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  return data.news.find((el: Post) => el.id == id)
}

export default async function Event({ params }: {
  params: { id: number }
}) {

  const event = await getData(params.id)

  return (
    <article className={styles.event}>
      <div className={styles.headline}>
        <h2>{new Date(event.date).toLocaleDateString('ru', { year: "numeric", month: "long", day: "numeric" })}</h2>
        <h1>{event.title}</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image
            className={styles.src}
            src={event.image_big}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={event.title}
          />
        </div>
        <div className={styles.lead}>{parse(event.lead)}</div>
      </div>
    </article>
  )
}
