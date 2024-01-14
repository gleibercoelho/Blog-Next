'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css"

const  NavLink = ({item}) => {

    const pathName = usePathname();
    
    return (
     
      
      <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}` }>
         {item.tittle}
         </Link>
      
    )
  };
  export default NavLink;