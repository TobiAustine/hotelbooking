import React from 'react'
import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MailList from '../../components/mailList/MailList'
import NavBar from '../../components/Navbar/NavBar'
import PropertyList from '../../components/PropertyList/PropertyList'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Header></Header>
        <div className={styles.homeContainer}>
            <Featured></Featured>
            <div className={styles.homeTitle}>
                <h2>Browse by Property type</h2>
            </div>
            <PropertyList></PropertyList>
            <div className={styles.homeTitle}>
                <h2>Homes guests love...</h2>
            </div>
            <FeaturedProperties></FeaturedProperties>
            {/* <div className={styles.homeTitle}>
                <h2>You can send a Mail</h2>
            </div> */}
            <MailList></MailList>
            <Footer></Footer>
        </div>



    </div>
  ) 
}

export default Home