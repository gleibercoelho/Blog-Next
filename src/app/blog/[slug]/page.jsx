import styles from "./singlePost.module.css"
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container} >
      <div className={styles.imgContainer} >
        <Image src="https://images.pexels.com/photos/8820325/pexels-photo-8820325.jpeg" fill className={styles.img} />
      </div>
      <div className={styles.textContainer} >
        <h1 className={styles.title} ></h1>
        <div className={styles.detail} >
          <Image src="https://images.pexels.com/photos/8820325/pexels-photo-8820325.jpeg" width={50} height={50} className={styles.avatar} />
          <div className={styles.detailText} >
            <span className={styles.detailTitle} >Author</span>
            <span className={styles.detailValue} >Gleiber Coelho</span>
          </div>
          <div className={styles.detailText} >
            <span className={styles.detailTitle} >Published</span>
            <span className={styles.detailValue} >16.01.2024</span>
          </div>          
        </div>
        <div className={styles.content}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatum fugit sit vero quos culpa modi neque incidunt quae amet sequi ullam, atque aut, corporis ex obcaecati, deleniti soluta recusandae!</p>

          </div>
      </div>
    </div>
  )
};
export default SinglePostPage;