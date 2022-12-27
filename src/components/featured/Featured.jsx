import React from 'react'
import styles from './Featured.module.css'
import hotel1 from '../../images/hotellobby.avif'
import hotel2 from '../../images/hotelview.webp'
import hotel3 from '../../images/hotelfood3.webp'
import hotel4 from '../../images/hotelview2.webp'

const Featured = () => {
  return (
    <div className={styles.featured}>
        <div className={styles.featuredItem}>
            <img src={hotel1} alt="hotel" />
            <div className={styles.featuredTitles}>
                <h2>Abuja</h2>
                <h3>120 properties</h3>
            </div>

        </div>


        <div className={styles.featuredItem}>
            <img src={hotel3} alt="hotel" />
            <div className={styles.featuredTitles}>
                <h2>Lagos</h2>
                <h3>120 properties</h3>
            </div>

        </div>



        {/* <div className={styles.featuredItem}>
            <img src={hotel4} alt="hotel" />
            <div className={styles.featuredTitles}>
                <h2>Calabar</h2>
                <h3>120 properties</h3>
            </div>

        </div> */}


        <div className={styles.featuredItem}>
            <img src={hotel2} alt="hotel" />
            <div className={styles.featuredTitles}>
                <h2>Port Harcourt</h2>
                <h3>120 properties</h3>
            </div>

        </div>


    </div>
  )
}

export default Featured