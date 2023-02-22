import Layout from '@/components/Layout'
import Posts from '@/components/Posts/Posts'
import { selectData, setData } from '@/redux/slices/data'
import { selectLanguage } from '@/redux/slices/language'
import styles from '@/styles/pages/HomePage.module.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {

   const dispatch = useDispatch()

   const eventsdata = useSelector(selectData)

   const currentLanguage = useSelector(selectLanguage)

   useEffect(() => {
      fetchData(currentLanguage === 'Eng' ? 2 : 1)
   }, [currentLanguage])

   const fetchData = async (language: number) => {
      const res = await fetch(`https://news.itmo.ru/api/news/list/?ver=2.0&language_id=${language}&per_page=9`)
      const data = await res.json()
      dispatch(setData(data))
   }

   return (
      <Layout>
         <h1 className={styles.title}>{currentLanguage === 'Рус' ? 'Новости и события' : 'News and Events'}</h1>
         {!!eventsdata ? <Posts events={eventsdata.news} /> : <>loading</>}
      </Layout>
   )
}