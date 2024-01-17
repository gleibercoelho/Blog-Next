import styles from "./footer.module.css";


const  Footer = () => {
    return (
      <div className={styles.container} >
      <div className={styles.logo} >Gleiber</div>
      <div className={styles.text} >Gleiber Coelho creative thoughts agency ₢ All rights reserved</div>
      </div>
    )
  };
  export default Footer;