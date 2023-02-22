import { Post as PostInterface } from "@/interfaces/Post"
import Post from "./Post/Post"

import styles from './Posts.module.css'

export default function Posts({ events }: { events: PostInterface[] }) {
   return (
      <div className={styles.posts}>
         {events.map(event => <Post id={event.id} title={event.title} image={event.image_big} date={event.date} />)}
      </div>
   )
}