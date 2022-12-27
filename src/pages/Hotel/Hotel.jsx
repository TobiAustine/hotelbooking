import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/Navbar/NavBar'
import styles from './Hotel.module.css'
import {GrLocationPin} from 'react-icons/gr'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'
import image from '../../images/hotellobby.avif'
import image1 from '../../images/hotel.avif'
import image2 from '../../images/hotel2.avif'
import image3 from '../../images/hotelbed.avif'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/Footer/Footer'

const Hotel = () => {
   

    const photos = [
      {
        src: image
      },
      {
        src: image1
      },
      {
        src: image2
      },
      {
        src: image3
      },
      {
        src: image3
      },
      {
        src:image
      }
    ]

    const [index, setIndex] = useState(0)
    const [open, setOpen] = useState(false)

   
    const handleOpen = (id) =>{
          setIndex(id)
          setOpen(true)
    }
const arrowleft = () => {
      setIndex(index - 1)
      if(index < 1){
        setIndex(index.length)
      }
}

const arrowright = () => {
  setIndex(index + 1)
  if(index === index.length){
    setIndex(0)
  }
}


  return (
  <>
  <NavBar></NavBar>
  <Header type='list'></Header>
  <div className={styles.hotelContainer}>
   {open && <div className={styles.slider}>

        <AiFillCloseCircle  size={30} className={styles.close} onClick={() => setOpen(false)} ></AiFillCloseCircle>

      <FaArrowLeft size={25}  className={styles.arrow} onClick={() => arrowleft}></FaArrowLeft> 
      
      <div className={styles.sliderWrapper}>
        <img src={photos[index].src} alt="" className={styles.sliderImg}/>
      </div> 

      <FaArrowRight onClick={() => arrowright}  className={styles.arrow} size={25}></FaArrowRight>
    </div> } 



    <div className={styles.hotelWrapper}>

    <button className={styles.bookNow} >
      Reserve or Book Now!
    </button>

       <h1 className={styles.hotelTitle}>
        Grand Hotel
       </h1>
      <div className={styles.hotelAddress}>
          <GrLocationPin color='#0071c2'></GrLocationPin>
          <span>Garki, Abuja</span>
      </div>

      <span className={styles.hotelDistance}>
        Excellent Location - 500m from center
      </span>

      <span className={styles.hotelPriceHighlight}>
        Book a stay over $120 at this property and get a free airport taxi.
      </span>

      <div className={styles.hotelImages}>
        {photos.map((photo, id) =>(
            
              <div className={styles.hotelImgWrapper} key={id}>
                <img src={photo.src} alt="" onClick = { () => handleOpen(id)}/>
              </div>
           
  )) }
          {/* <div className={styles.hotelImgWrapper}>
             <img src={image} alt="" />
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image2} alt="" />
            <img src={image} alt="" /> 
          </div> */}



      </div>

      <div className={styles.hotelDetails}>
        <div className={styles.hotelDetailsText}>
        <h1 className={styles.hotelTitle}>
            Relax in the city of Abuja
        </h1>
        <p className={styles.hotelDesc}>
            Located in the heart of the capital city of Abuja, Nigeria's capital, ith close proximity to natural parks, malls. 24-hour electricity and stable wifi are also available.
        </p>
        </div>

        <div className={styles.hotelDetailsPrice}>
            <h1>Perfect for a 3-day stay</h1>
            <span>All the peace and comfort you need...</span>
            <h2>
              <b>$500</b> (3 days)
            </h2>
            <button>Reserve or Book Now!</button>
        </div>
      </div>


       

    </div>
    
    <MailList></MailList> 
    <Footer></Footer>
  </div>
  
  </>
  )
}

export default Hotel