import useFetch from "../../hooks/useFetch.js";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const {data, loading, error}=useFetch("/rooms?featured=true&size=4");

  
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={`http://localhost:8800/${item.photos[0]}`}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from Rs.{item.cheapestPrice}/-</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
