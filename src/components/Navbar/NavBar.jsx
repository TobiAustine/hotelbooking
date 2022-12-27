import React from 'react'
import styles from './NavBar.module.css'
import {SiHotelsdotcom} from 'react-icons/si'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
       <div className={styles.navContainer} >

          <Link to={'/'} > <span className={styles.logo} > <SiHotelsdotcom color='white' size={32}></SiHotelsdotcom>otels </span></Link>
       


        <div className={styles.navItems} >
            <button className={styles.navButton}>Register</button>

            <button className={styles.navButton}>Log In</button>

        </div>




       </div>
    </nav>
  )
}

export default NavBar