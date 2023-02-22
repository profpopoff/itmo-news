import Layout from "@/components/Layout"
import { Post } from "@/interfaces/Post"
import parse from 'html-react-parser'
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import Image from "next/image"
import { useSelector } from 'react-redux'

import styles from '@/styles/pages/Event.module.css'
import { usePathname } from "next/navigation"
import { selectLanguage } from "@/redux/slices/language"
import { useEffect, useState } from "react"

export default function Event() {

  const [event, setEvent] = useState<Post>()

  const pathname = usePathname()
  const id = pathname?.split('/')[2]
  const currentLanguage = useSelector(selectLanguage)

  useEffect(() => {
    fetchData(currentLanguage === 'Eng' ? 2 : 1)
  }, [])

  const fetchData = async (language: number) => {
    const res = await fetch(`https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&language_id=${language}&per_page=9`)
    const data = await res.json()
    const event = data.news.find((el: Post) => el.id == Number(id))
    setEvent(event)
  }

  return (
    <Layout>
      {!!event && <article className={styles.event}>
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
          {!!event.lead && <div className={styles.lead}>{parse(event.lead)}</div>}
        </div>
      </article>}
    </Layout>
  )
}