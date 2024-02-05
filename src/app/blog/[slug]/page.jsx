import PostUser from "@/components/postUser.jsx/postUser";
import styles from "./singlePost.module.css"
import Image from "next/image";
import { getPost } from "@/lib/data";
/* import { getPost } from "@/lib/data"; */

/* export const metadata = {
  title: "Post Page",
  description: "Post description",
} */


const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json()
} 

export const generateMetadata = async ({ params }) => {
  const {slug} = params;
  const post = await getData(slug);

  return {
    title: post.title,
    description: post.desc,
  }
}

const SinglePostPage = async ({params}) => {

  const {slug} = params;

  const post = await getData(slug)
 /* const post = await getPost(slug); */
  return (
    <div className={styles.container} >
      <div className={styles.imgContainer} >
        <Image src="https://images.pexels.com/photos/8820325/pexels-photo-8820325.jpeg" fill className={styles.img} alt="" />
      </div>
      <div className={styles.textContainer} >
        <h1 className={styles.title} >{post?.title}</h1>
        <div className={styles.detail} >
          <Image src="https://images.pexels.com/photos/8820325/pexels-photo-8820325.jpeg" width={50} height={50} className={styles.avatar} alt="" />
       {/*   <PostUser userId = {post?.userId} /> */}
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