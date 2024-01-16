"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navBar/navLink";

const  Links = () => {

    const [open, setOpen] = useState(false)
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
        <div className={styles.container}>
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
            <button className={styles.logout} >Logout</button>
            </>
        ) : (
            <NavLink item={{title: "Login", path: "/login"}} />
        )
      }
      </div>
      <button className={styles.menuButton} onClick={() => setOpen( (prev) => !prev)} >Menu</button>
      {
        open && <div className={styles.mobileLinks}>
            {
                links.map((link) => (
                    <NavLink item={link} key={link.tittle} />
                ))
            }

        </div>
      }
      </div>
    )
  };
  export default Links;