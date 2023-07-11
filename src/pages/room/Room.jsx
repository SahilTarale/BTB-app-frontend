import "./room.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/postList/postList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";
import { SearchContext } from "../../context/SearchContext.js";
import { AuthContext } from "../../context/AuthContext.js";
import Reserve from "../../components/reserve/Reserve";

const Room = () => {
  const location = useLocation();
  const id= location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  // const {imageUrls, loading, error} = useFetch(`/rooms/find/${id}`);  
  const {data,loading,error}=useFetch(`https://BTB_app/`);
  const {user} = useContext(AuthContext);
  const navigate=useNavigate();
  
    const{dispatch}=useContext(SearchContext);

    const [imageUrls, setImageUrls] = useState([]);

    
    useEffect(() => {
      const fetchImageUrls = async () => {
        try {
          const response = await fetch(`/rooms/${id}`);
        const textResponse = await response.text();
        console.log(textResponse); // Check the response received
        const ph = JSON.parse(textResponse);
        setImageUrls(ph);
        } catch (error) {
          console.error('Error fetching image URLs:', error);
        }
      };
  
      fetchImageUrls();
    }, []);
  
    console.log(imageUrls,54)

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleClick= ()=>{
    if(user){
      setOpenModal(true);
    }else {
      navigate("/login");
    }
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
    {loading ? ("loading"):
    (
    <div className="roomContainer">
      {open && (
        <div className="slider">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="close"
            onClick={() => setOpen(false)}
          />
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="arrow"
            onClick={() => handleMove("l")}
          />
          <div className="sliderWrapper">
            <img src={`https://BTB_app/${imageUrls?.photos[slideNumber]}`}  alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="arrow"
            onClick={() => handleMove("r")}
          />
        </div>
      )}
      <div className="roomWrapper">       
        <h1 className="roomTitle">{imageUrls.name}</h1>
        <div className="roomAddress">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{imageUrls.address}</span>
        </div>
        <span className="roomDistance">
         Excellent location - {imageUrls.distance}
        </span>
        <span className="roomPriceHighlight">
         {imageUrls.rooms}
        </span>
        <div className="roomImages">
          {imageUrls.photos?.map((photo, i) => (
            <div className="roomImgWrapper" key={i}>
              <img
                onClick={() => handleOpen(i)}
                src={`https://BTB_app/${[photo]}`} 
                alt=""
                className="roomImg"
              />
            </div>
          ))}
        </div>
        <div className="roomDetails">
          <div className="roomDetailsTexts">
            <h1 className="roomTitle">Description</h1>
            <div className="roomDesc">
            {/* <ul>
              <li><p>furnishing status: {imageUrls.desc?.[0]}</p></li>
              <li><p>water supply: {imageUrls.desc?.[1]}</p></li>
              <li><p>facing: {imageUrls.desc?.[2]}</p></li>
            </ul>
            <ul>
              <li><p>floor : {imageUrls.desc?.[3]}</p></li>
              <li><p>Bathroom: {imageUrls.desc?.[4]}</p></li>
              <li><p>Gated Security : {imageUrls.desc?.[5]}</p></li>
            </ul>  */}
                       
              <p>{imageUrls.desc}</p>            
            </div>
            
          </div>
          <div className="roomDetailsPrice">
            <h1>Rent!</h1>
            <span>
              Deposite : Rs. {imageUrls.deposite}/-
            </span>
            <h2>
              <b>Rs. { imageUrls.cheapestPrice}/-</b> ({imageUrls.perRate})
            </h2>
            <button onClick={handleClick}>Get owner Details</button>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>)}
    {openModal && <Reserve setOpen={setOpenModal} roomId={id}/>}
    </div>
  );
};

export default Room;
