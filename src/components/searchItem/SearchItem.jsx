import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={`http://localhost:8800/${item.photos[0]}`}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} </span>
        <span className="siTaxiOp">{item.area}</span>
        <span className="siSubtitle">
          Ready to move !
        </span>
        <span className="siFeatures">
          {item.rooms}
        </span>
        <span className="siCancelOp">Rs. {item.deposite}/- </span>
        <span className="siCancelOpSubtitle">
          {item.available}
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">Rs. {item.cheapestPrice}/-</span>
          <span className="siTaxOp">{item.perRate}</span>
          <Link to={`/rooms/${item._id}`}>
            <button className="siCheckButton">See Details</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
