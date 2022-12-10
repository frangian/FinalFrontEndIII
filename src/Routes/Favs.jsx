import React from "react";
import Card from "../Components/Card";
import { getFavFromStorage } from "../Components/utils/localStorage.service";

const Favs = () => {
  const DentistasFavoritos = getFavFromStorage();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {DentistasFavoritos.length ? 
          DentistasFavoritos.map((favs) => (<Card {...favs} key={favs.id} />))
          : null}
      </div>
    </>
  );
};

export default Favs;
