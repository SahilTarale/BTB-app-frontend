import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./reserve.css";
import useFetch from "../../hooks/useFetch.js";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Reserve = ({ setOpen }) => {
  const id= location.pathname.split("/")[2];
  const [selectedRooms, setSelectedRooms] = useState([]);
  const {data, loading, error}=useFetch(`/rooms/find/${id}`);   
  const { dates } = useContext(SearchContext);
  
  const navigate = useNavigate();

   
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />

        <span>{data?.ownType} Details:</span>
        <div className="rItem">
        <div className="rItemInfo">
        <div className="rTitle">Name : {data?.owner}</div>
        <div className="rTitle">Mobile No. : {data?.mobile}</div>
        <div className="rTitle">Vacancy : {data?.capacity}</div>
        </div>
        </div>        
        <button onClick={() => setOpen(false)}  className="rButton">
          close !
        </button>
      </div>
    </div>
  );
};

export default Reserve;