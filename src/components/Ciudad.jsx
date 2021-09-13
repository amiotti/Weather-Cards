import React from "react";
import S from './Ciudad.module.css'

function Ciudad ({city}){
    return(
        <div className={S.container}>
            <div className={S.ciudad}>
                <h2>{city.name}</h2>
                <div>Temperatura: {city.temp} °C</div>
                <div>Clima: {city.weather}</div>
                <div>Viento: {city.wind} km/h</div>
                <div>Cantidad de nubes: {city.clouds}</div>
                <div>Latitud: {city.latitud}°</div>
                <div>Longitud: {city.longitud}°</div>
            </div>
        </div>
    )
}

export default Ciudad