import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.titleContainer}>Creative thoughts Agency</h1>
        <p className={styles.descrContainer}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequuntur dignissimos
          libero laboriosam excepturi sint voluptates sequi.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands} >
        <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  )
};
export default Home;
