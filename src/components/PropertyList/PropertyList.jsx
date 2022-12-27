import React from 'react'
import styles from './PropertyList.module.css'
import hotel from '../../images/hotelfood2.webp'
import hotel1 from '../../images/hotelbed.avif'
import hotel2 from '../../images/hotel2.avif'

const PropertyList = () => {
  return (
    <div className={styles.pList} >
        
    <div className={styles.pListItem}>
        <img src={hotel} alt="" className={styles.pListImg} />
        <div className={styles.pListTitle}>
            <h2>Hotels</h2>
            </div>

            <div className={styles.pListDesc}>
            <p>200 hotels</p>
            </div>


    </div>

    <div className={styles.pListItem}>
        <img src={hotel1} alt="" className={styles.pListImg} />
        <div className={styles.pListTitle}>
            <h2>Guest rooms</h2>
            </div>

            <div className={styles.pListDesc}>
            <p>200 Guest rooms</p>
            </div>


    </div>

    <div className={styles.pListItem}>
        <img src={hotel2} alt="" className={styles.pListImg} />
        <div className={styles.pListTitle}>
            <h2>Apartments</h2>
            </div>

            <div className={styles.pListDesc}>
            <p>200 Apartments</p>
            </div>


    </div>

    <div className={styles.pListItem}>
        <img src={hotel} alt="" className={styles.pListImg} />
        <div className={styles.pListTitle}>
            <h2>Lodges</h2>
            </div>

            <div className={styles.pListDesc}>
            <p>20 Lodges</p>
            </div>


    </div>




    </div>
  )
}

export default PropertyList