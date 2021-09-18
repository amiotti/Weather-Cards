import React from 'react';
import s from './Card.module.css'
import {Link} from 'react-router-dom'

// max, min, name, img, onClose
function Card(props) {
   
  return (
      
    <div className = {s.container}>

      <Link to= {`/ciudad/${props.id}`}>
        <div className = {s.cityName}>{props.name}</div>
      </Link>
    <div className={s.min}>
    <p>Min</p>
    <p>{props.min + '°C'}</p>
    </div>

    <div className={s.max}>
    <p>Max</p>
    <p>{props.max + '°C'}</p>
    </div>

    <div><img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='weather_img'/></div>

   
    <button onClick={props.onClose} className={s.boton}>X</button>

    </div>
  )
};

export default Card