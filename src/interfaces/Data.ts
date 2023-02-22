import { Post } from './Post'

export interface Data {
   category: number
   total: number
   page: number
   per_page: number
   last_page: number
   news: Post[]
}