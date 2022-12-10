import React from "react";
import Card from "../Components/Card";
import { getFavFromStorage } from "../Components/utils/localStorage.service";

const Favs = () => {
  const DentistasFavoritos = getFavFromStorage();

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
          {DentistasFavoritos.map((favs) => (
              <Card {...favs} key={favs.id} />))
          }
      </div>
    </>
  );
};

export default Favs;