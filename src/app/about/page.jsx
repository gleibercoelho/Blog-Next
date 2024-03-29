import Image from "next/image";
import styles from "./about.module.css"

export const metadata = {
  title: "About Page",
  description: "About description",
}

const AboutPage = () => {
  return (
    <div className={styles.container} >
      <div className={styles.textContainer} >
        <h2 className={styles.subtitle} >About agency</h2>
        <h1 className={styles.title} >We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className={styles.descr} >
          We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibylity
          and precission. We are world. Our Special Team best consulting & finance solution provider. Wide range
          of web and software development Services.
        </p>
        <div className={styles.boxes} >
        <div className={styles.box}  > 
          <h1>10 K+</h1>
          <p>Year of experience</p>
        </div>
        <div className={styles.box} >  
        <h1>10 K+</h1>
          <p>Year of experience</p>
        </div>
        <div className={styles.box} >
        <h1>10 K+</h1>
          <p>Year of experience</p>
        </div>
      </div>
      </div>
      
       <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" width={500} height={500} className={styles.img}/>
        </div> 
    </div>
  )
};
export default AboutPage;