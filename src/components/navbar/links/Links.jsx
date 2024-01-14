import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navBar/navLink";

const  Links = () => {

    const links = [
        {
            tittle: "Homepage",
            path: "/",
        },
        {
            tittle: "About",
            path: "/about",
        },
        {
            tittle: "Contact",
            path: "/contact",
        },
        {
            tittle: "Blog",
            path: "/blog",
        },      
    ]

    const session = true;
    const isAdmin = true;

    return (
      <div className={styles.links}>
      {links.map((link => (
        <NavLink item={link} key={link.tittle } />
      )))}{
        session ? (
            <>
            {
                isAdmin && 
                    <NavLink item={{title: "Admin", path: "/admin"}}  />
                
            }
            <button>Logout</button>
            </>
        ) : (
            <NavLink item={{title: "Login", path: "/login"}} />
        )
      }
      </div>
    )
  };
  export default Links;