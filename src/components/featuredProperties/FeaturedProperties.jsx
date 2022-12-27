import React from 'react'
import styles from './FeaturedProperties.module.css'
import hotel from '../../images/hotellobby.avif'
import hotel1 from '../../images/hotelbed.avif'
import hotel2 from '../../images/hotel.avif'
import hotel3 from '../../images/hotelview.webp'

const FeaturedProperties = () => {
  return (
    <div className={styles.fProps} > 

    <div className={styles.fpItem}>

    <img src={hotel} alt="hotel" className={styles.fpImg} />
    <span className={styles.fpName} >Safe Haven</span>

    <span className={styles.fpCity}>Lagos</span>

    <span className={styles.fpPrice}>Starting from $100</span>

    <div className={styles.fpRating}>
        <button>7.5</button>
        <span>Excellent</span>
    </div>
</div>



<div className={styles.fpItem}>

<img src={hotel1} alt="hotel" className={styles.fpImg} />
<span className={styles.fpName} >Safe Haven</span>

<span className={styles.fpCity}>Port Harcourt</span>

<span className={styles.fpPrice}>Starting from $100</span>

<div className={styles.fpRating}>
    <button>6.5</button>
    <span>Excellent</span>
</div>
</div>



<div className={styles.fpItem}>

<img src={hotel2} alt="hotel" className={styles.fpImg} />
<span className={styles.fpName} >Safe Haven</span>

<span className={styles.fpCity}>Abuja</span>

<span className={styles.fpPrice}>Starting from $300</span>

<div className={styles.fpRating}>
    <button>8.5</button>
    <span>Excellent</span>
</div>
</div>
    



<div className={styles.fpItem}>

<img src={hotel3} alt="hotel" className={styles.fpImg} />
<span className={styles.fpName} >Safe Haven</span>

<span className={styles.fpCity}>Calabar</span>

<span className={styles.fpPrice}>Starting from $200</span>

<div className={styles.fpRating}>
    <button>7.9</button>
    <span>Excellent</span>
</div>
</div>
    
    
    </div>
  )
}

export default FeaturedProperties