import React, { useState } from "react";
import "./App.css";
import Cards from "../components/Cards";
import Nav from "../components/Nav";
// import "./global.css";
import { Route } from "react-router-dom";
import About from "../components/About";
import Ciudad from "../components/Ciudad";

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    const apiKey = "fb72a23502826e3b1246efdcd63da1b1";

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
    // .catch( err => console.log('Error al cargar los datos'))    //Control de error por si no anda el fetch (Promise)
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id != id));
  }

  //onFilter filters the city that has same id to de url
  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id == parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <div>
        <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      </div>
      <div>
        <Route path="/about" component={About} />
      </div>
      <hr />
      <div>
        <Route
          exact
          path="/"
          render={() => <Cards cities={cities} onClose={onClose} />}
        />

        <Route
          exact
          path="/ciudad/:ciudadId"
          render={({ match }) => (
            <Ciudad city={onFilter(match.params.ciudadId)} />
          )}
        />
      </div>
      <hr />
    </div>
  );
}

export default App;
