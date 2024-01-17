import Image from "next/image";
import styles from "./postcard.module.css"
import Link from "next/link";

const PostCard = () => {
    
    return (
        <div className={styles.container} >
            <div className={styles.top} >
                <div className={styles.imgContainer} >
                    <Image src="https://images.pexels.com/photos/4057058/pexels-photo-4057058.jpeg" className={styles.img}  fill/>
                </div>
                <span className={styles.date} >16.01.2024</span>
            </div>
            <div className={styles.bottom} >
                <h1 className={styles.title} >Title One</h1>
                <p className={styles.desc} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, magnam illum. Eaque nihil, perspiciatis voluptate ullam officia minima expedita neque sapiente, doloremque beatae facilis temporibus. Aspernatur numquam at quos magni? </p>
                <Link className={styles.link} href="/blog/post" >Read More</Link>
            </div>
        </div>
    )
}

export default PostCard;