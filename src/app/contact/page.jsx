import Image from "next/image";
import styles from "./contact.module.css"

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
}

const  Contact = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" fill className={styles.img} alt="" />
        </div>
        <div className={styles.formContainer}>
          <form action=""className={styles.form}>
            <input type="name" placeholder="Name and Surname" />
            <input type="email"  placeholder="Email Address"/>
            <input type="phone"  placeholder="Phone Number (optinal)"/>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className={styles.form}>Send</button>
          </form> 
        </div>
      </div>
    )
  };
  export default Contact;
  