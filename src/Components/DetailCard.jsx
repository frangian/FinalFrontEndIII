import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailTable from "./DetailTable";

const DetailCard = () => {
  const [data, setData] = useState([])
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        setData(res.data);
      })
  })

  console.log(data)

  return (
    <>
      <DetailTable {...data} />
    </>
  );
};

export default DetailCard;