import PostUser from "@/components/postUser.jsx/postUser";
import styles from "./singlePost.module.css"
import Image from "next/image";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json()
}

const SinglePostPage = async ({params}) => {

  const {slug} = params;

  const post = await getData(slug)
  return (
    <div className={styles.container} >
      <div className={styles.imgContainer} >
        <Image src="https://images.pexels.com/photos/8820325/pexels-photo-8820325.jpeg" fill className={styles.img} />
      </div>
      <div className={styles.textContainer} >
        <h1 className={styles.title} >{post.title}</h1>
        <div className={styles.detail} >
          <Image src="https://images.pexels.com/photos/8820325/pexels-photo-8820325.jpeg" width={50} height={50} className={styles.avatar} />
         <PostUser userId = {post.userId} />
          <div className={styles.detailText} >
            <span className={styles.detailTitle} >Published</span>
            <span className={styles.detailValue} >16.01.2024</span>
          </div>          
        </div>
        <div className={styles.content}>
            <p>{post.body}</p>

          </div>
      </div>
    </div>
  )
};
export default SinglePostPage;