import postsStyles from '../Posts.module.css'
import postStyles from '../Post/Post.module.css'
import styles from './Loading.module.css'

export default function Loading() {
   return (
      <div className={postsStyles.posts}>
         {[...Array(9)].map((i) => (
            <div key={i} className={`${postStyles.post} ${styles.post}`}>
               <div className={styles.wrapper}>

                  <div className={postStyles.image}>
                     <span className={styles.greyArea}></span>
                  </div>
                  <div className={postStyles.headline}>
                     <p className={postStyles.date}>12 Lorem 2022</p>
                     <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit voluptatem magni quod error repellendus ut quisquam recusandae.</h2>
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}