import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { H1, Tabla, TablaTitulo, TablaValor , Tr } from "../Components/stylesheets/styledComponents.jsx"


const Detail = () => {
  const [dataDen, setDataDen] = useState([])
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(respuesta => setDataDen(respuesta.data))
  }, [id]);

  const campos = ["name", "email", "phone", "website"];
 
  return (
    <>
      <H1>Informacion Dentista { id } </H1>
      <Tabla>
        <tbody>
          {campos.map(campos => (
            <Tr key={campos}>
              <TablaTitulo>{campos}</TablaTitulo>
              <TablaValor>{dataDen[campos]}</TablaValor>
            </Tr>
          ))}
        </tbody>
      </Tabla>
    </>
  )
}

export default Detail