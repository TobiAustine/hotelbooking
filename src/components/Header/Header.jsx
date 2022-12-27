import {useState} from 'react'
import styles from './Header.module.css'
import {FaBed, FaPlane, FaCarAlt, FaTaxi, FaCalendarAlt, FaUserAlt} from 'react-icons/fa'
import {GiPerson} from 'react-icons/gi'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file 
import {format} from 'date-fns'
import {Link, useNavigate} from 'react-router-dom'


const Header = ({type}) => {

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const [destination, setDestination] = useState('')


      const [openDate, setOpenDate] = useState(false)



      const [options, setOptions] = useState({
        adult: 1,
        children:0,
        room:1
      })

      const handleOption = (name, operation) => {
        setOptions(prev =>{
            return {
                ...prev,
                 [name] : operation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })
      }
      

     const [openOptions, setOpenOptions] = useState(false)


      const navigate = useNavigate() 

     const handleSearch = () => { 
        navigate('/hotels', {state:{destination, date, options}} )
     }
 

  return (
    <div className={styles.header} >
   <div className={type === 'list' ? `${styles.headerContainer} ${styles.listMode}` : styles.headerContainer}>

        
       <div className={styles.headerList}>

        <div className={`${styles.headerListItem} ${styles.active} `}>
            <FaBed></FaBed>
            <span>Stays </span>
        </div>

        <div className={styles.headerListItem}>
            <FaPlane></FaPlane>
            <span>Flight </span> 
        </div>

        <div className={styles.headerListItem}>
            <FaCarAlt></FaCarAlt>
            <span>Car rentals </span>
        </div>

        <div className={styles.headerListItem}>
            <FaBed></FaBed>
            <span>Attractions</span>
        </div>

        <div className={styles.headerListItem}>
            <FaTaxi></FaTaxi>
            <span>Airport Taxis</span>
        </div>


       </div>



       { type !== 'list' && <>
        <h1 className={styles.headerTitle}>
            Enjoy huge discounts and lots more benefits...
        </h1>

        <p className={styles.headerDesc}>
            Get rewarded for spending time with us.
        </p>

        <button className={styles.headerBtn}>
            Sign In/Register
        </button>


        <div className={styles.headerSearch}>


        <div className={styles.headerSearchItem}>

            <FaBed  className={styles.headerIcon}  ></FaBed>
            <input type="text" placeholder='Where are you headed?'  className={styles.headerSearchInput} onChange={ (e) => {setDestination(e.target.value)} } />
            
        </div>

        <div className={styles.headerSearchItem} onClick ={() => {setOpenDate(!openDate)}} >

            <FaCalendarAlt  className={styles.headerIcon}     ></FaCalendarAlt>
           <span className={` ${styles.headerSearchText} ${styles.dateText}`}> {` ${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}  `} </span>
           
           {openDate && <DateRange  editableDateInputs={true}  onChange={item => setDate([item.selection])}
           minDate={new Date()} 
            moveRangeOnFirstSelection={false} 
            ranges={date} className={styles.date}/>
             }
           
           
           
        </div>


            <div className={styles.headerSearchItem} onClick={() => setOpenOptions(!openOptions)} >
             <GiPerson  className={styles.headerIcon}  ></GiPerson>
            <span className={styles.headerSearchText}> {`${options.adult} adult | ${options.children} children | ${options.room} room `}  </span>

           {openOptions && <div className={styles.options}>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>
                    Adult</span>  

                    <div className={styles.optionCounter}>
                    <button disabled={options.adult <= 1}  className={styles.optionCounterButton} onClick={() => handleOption('adult', 'd')}>
                       -
                    </button>
                    <span className={styles.optionCounterNumber}>
                    {options.adult}
                    </span>
                    <button className={styles.optionCounterButton} onClick={() => handleOption('adult', 'i')}>
                    +
                    </button>
                </div>
                </div>


                <div className={styles.optionItem}>
                  <span className={styles.optionText}>
                   Children</span> 
                   <div className={styles.optionCounter}>
                    
                      <button disabled={options.children < 1} className={styles.optionCounterButton} onClick={() => handleOption('children', 'd')}>
                        -
                    </button>
                    <span className={styles.optionCounterNumber}>
                        {options.children}
                    </span>
                    <button className={styles.optionCounterButton} onClick={() => handleOption('children', 'i')}>
                        +
                    </button>
                    
                    </div> 
                  
                </div>


                <div className={styles.optionItem}>
                  <span className={styles.optionText}>
                    Rooms</span>  

                    <div className={styles.optionCounter}>
                    <button disabled={options.room <= 1} className={styles.optionCounterButton} onClick={() => handleOption('room', 'd')}>
                        -
                    </button>
                    <span className={styles.optionCounterNumber}>
                        {options.room}
                    </span>
                    <button className={styles.optionCounterButton} onClick={() => handleOption('room', 'i')} >
                        +
                    </button>
                </div>

                </div>











            </div>}

          </div>


          <div className={styles.headerSearchItem}>
            
             <button className={styles.headerBtn} onClick={handleSearch}>
                Search
            </button> 
           


          </div>






        </div>
        </>}









       </div>
    </div>
  )
}

export default Header