import React from 'react'
import styles from './SearchItem.module.css'
import hotel from '../../images/hotel2.avif'

const SearchItem = () => {
  return (
    <div className={styles.searchItem}>
        <img src={hotel} alt="" className={styles.siImg} />
        <div className={styles.siDesc}>

            <h1 className={styles.siTitle}> Tower Street Apartments</h1>
            <span className={styles.siDistance}> 500m from center</span>
            <span className={styles.siTaxiOp}>Free Airport Taxi</span>
            <span className={styles.siSubtitle}>Studio Apartment with Air conditioning</span>
            <span className={styles.siFeatures}> Entire studio | 1 bathroom | 21m 1 full bed</span>
            <span className={styles.siCancelOp}>Free Cancellation</span>
            <span className={styles.siCancelOpSubtitle}>
                You can cancel later, so lock in this great price today!
            </span>

        </div>

        <div className={styles.siDetails}>
           <div className={styles.siRating}>
            <span>Excellent</span>
            <button>8.5</button>
           </div>

           <div className={styles.siDetailTexts}>
            <span className={styles.siPrice}>
                $1450
            </span>
            <span className={styles.siTaxOp}>
               Includes taxes and Fees
            </span>
            <button className={styles.siCheckButton}>
                Check for availability
            </button>
           </div>
        </div>
    </div>
  )
}

export default SearchItem