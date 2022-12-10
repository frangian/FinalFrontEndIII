import React from "react";
import Card from "../Components/Card";
import { FavContainer, H1 } from "../Components/stylesheets/styledComponents";
import { getFavFromStorage } from "../Components/utils/localStorage.service";

const Favs = () => {
  const DentistasFavoritos = getFavFromStorage();

  return (
    <FavContainer>
      <H1>Dentistas Favoritos</H1>
      <div className="card-grid">
        {DentistasFavoritos.map((dentista) => (
          <Card {...dentista} 
            key={dentista.id} 
          />
        ))}
      </div>
    </FavContainer>
  );
};

export default Favs;