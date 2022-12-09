import React from "react";
import Card from "../Components/Card";
import { getFavFromStorage } from "../Components/utils/localStorage.service";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const DentistasFavoritos = getFavFromStorage();
  const reload= ()=>{
    window.location.replace('');
  }


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {DentistasFavoritos.length
          ? DentistasFavoritos.map((favs) => (
              <Card {...favs} key={favs.id} />
            ))
          : null}
          
      </div>
    </>
  );
};

export default Favs;
