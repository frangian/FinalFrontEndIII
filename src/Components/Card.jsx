import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { setFavInStorage, isFavorited, removeFavInStorage } from "./utils/localStorage.service";
import { ContextGlobal } from "./utils/global.context";
import styles from "./stylesheets/Card.module.css";
import StarIcon from '@mui/icons-material/Star';
import { yellow } from "@mui/material/colors";

const Card = ({  username, id, name }) => {
  const [favorite, setFavorite] = useState(() => isFavorited(id));
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  const isFav = (favorite) => {
    setFavorite(favorite);
  };

  const addFav = () => {
    const favorite = setFavInStorage({ id, name, username });
    isFav(favorite);
  };

  const removeFav = () => {
    const favorite = removeFavInStorage(id);
    isFav(favorite);
  };

  return (
    <div className={`card ${isDarkMode ? styles.cardDark : ""}`}>
      <img
        className="card-img-top"
        src="/images/doctor.jpg"
        alt="doctor"
      />
      <div className={`card-body ${styles.CardBody}`}>
        <Link to={`/users/${id}`}>
          <h3 className={`card-title ${styles.title}`}>{name}</h3>
        </Link>
        <p>{username}</p>
        <button
          onClick={favorite ? removeFav : addFav}
          className={`btn btn-${isDarkMode ? "dark" : "light"} ${styles.favButton}`}>
          {favorite ? <StarIcon sx={{ color: yellow[700] }}/> :<StarIcon sx={{ color: yellow[50] }}/>}
        </button>
      </div>
    </div>
  );
};

export default Card;