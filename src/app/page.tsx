import Posts from '@/components/Posts/Posts'
import styles from './page.module.css'

async function getData() {
  const res = await fetch('https://news.itmo.ru/api/news/list/?ver=2.0&per_page=9', { cache: "no-store" })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {

  const data = await getData()

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Новости и&nbsp;события</h1>
      <Posts events={data.news} />
    </main>
  )
}
