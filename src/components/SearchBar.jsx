import React, { useState } from 'react';
import s from './Nav.module.css'

export default function SearchBar({onSearch}) {
    
    const [city,setCity]=useState('');

  return (
    <div className={s.SB}>
          
    <form onSubmit={(e) => {
      e.preventDefault();
      
      onSearch(city);
      setCity('')       // para que al clickear 'Agregar' no siga figurando el nombre
      
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value = {city}
        onChange={e=>setCity(e.target.value)}
        
      />
      <input type="submit" value="Agregar" className="btn btn-primary"/>
    </form>
  

      {/* <button onClick={()=>props.onSearch('Buscando...')} className={"btn btn-outline-success"}>Agregar</button>   */}
      {/* hago ufncion arrow porque sino aparece la alerta apenas carga la pagina */}
    </div>
  )

  
    
};