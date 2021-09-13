import React from 'react'
import SearchBar from './SearchBar'
import s from './Nav.module.css'
import {Link} from 'react-router-dom'



function Nav({onSearch}){
    
    return (


        <div className = {s.navctn}>
        <Link to='/'>
         <span className = {s.text}>
            <img src="https://image.flaticon.com/icons/png/512/3767/3767036.png" alt="icon" className={s.icon}/>
            Weather APP
         </span>
        </Link>
            
                        
            <Link to='/about'>
                <span className={s.text}>About</span>
            </Link>

            <SearchBar onSearch={onSearch} className={s.SB}/>
        </div>
    )
}

export default Nav