import React from 'react';
import Card from './Card.jsx';
import ss from './Cards.module.css'

function Cards({cities, onClose}) {
  
    if (cities){
      return (
  
    
    <div className = {ss.Cards}>

      {cities.map((city,index )=> 
        <Card
        max= {city.max}       //Por que no es city.main.temp_max???
        min={city.min}
        name={city.name}
        img={city.img}
        onClose={() => onClose(city.id)}
        key={index}   // se define un id unico para saber que Card es (ver video)
        id = {city.id}
        />
      )
      }
   
  
    </div>
    )
  } else {
     return ( <div>Sin Ciudades</div>)
   } 
}
  
    
  


export default Cards;