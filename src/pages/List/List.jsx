import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'
import NavBar from '../../components/Navbar/NavBar'
import {format} from 'date-fns' 
import styles from './List.module.css'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'

const List = () => {

  const location = useLocation()

    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options)

  return (
   <>
   <NavBar></NavBar>
   <Header type = 'list'></Header>
   <div className={styles.listContainer}>
      <div className={styles.listWrapper}>
        <div className={styles.listSearch}>
            <h1 className={styles.listSearchTitle}>
                Search
            </h1>

            <div className={styles.lsItem}>
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination}/>
            </div>




            <div className={styles.lsItem}>
              <label htmlFor="">Check-in Date</label>
              <span onClick={() => {setOpenDate(!openDate)}}>{` ${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}  `}</span>
           { openDate &&   ( <DateRange onChange={item => setDate([item.selection])} 
               ranges={date}></DateRange>)}
            </div> 

            <div className={styles.lsItem}>
              <label htmlFor="">Options</label>

               <div className={styles.lsOptionItem}>
                <span className={styles.lsOptionText}>
                  Min price <small>per night</small> </span>
                  <input type="number" className={styles.lsOptionInput} />
               
               </div>

               <div className={styles.lsOptionItem}>
                <span className={styles.lsOptionText}>
                  Max price <small>per night</small> </span>
                  <input type="number" className={styles.lsOptionInput} />
               
               </div>

               <div className={styles.lsOptionItem}>
                <span className={styles.lsOptionText}>
                 Adults </span>
                  <input type="number" min={1} className={styles.lsOptionInput} placeholder={options.adult} />
               
               </div>

               <div className={styles.lsOptionItem}>
                <span className={styles.lsOptionText}>
                Children </span>
                  <input type="number" min={0} className={styles.lsOptionInput}   placeholder={options.children}/>
               
               </div>

               <div className={styles.lsOptionItem}>
                <span className={styles.lsOptionText}>
                  Rooms </span>
                  <input   min={1}type="number" className={styles.lsOptionInput}  placeholder={options.room}/>
               
               </div>

            </div>

            <button>
              Search
            </button>
            


        </div>
        <div className={styles.listResult}>
          <SearchItem></SearchItem>
          <SearchItem></SearchItem>
          <SearchItem></SearchItem>
          <SearchItem></SearchItem>
          <SearchItem></SearchItem>
          <SearchItem></SearchItem>
          <SearchItem></SearchItem>
          <SearchItem></SearchItem>
          
          </div>
      </div>

   </div>
   
   
   
   
   
   </>
  )
}

export default List