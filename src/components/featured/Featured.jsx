import useFetch from "../../hooks/useFetch.js";
import "./featured.css";

const Featured = () => {

  const { data, loading, error }= useFetch("/rooms/countByCity?cities=Dadar,Matunga,Vadala");

console.log(data);
  return (
    <div className="featured">
     {loading ? ("Loading Please wait") :( 
      <>
     <div className="featuredItem">
        <img
          src="https://assets-news.housing.com/news/wp-content/uploads/2020/09/30195548/Dadar-A-re-emerging-residential-hotspot-in-Mumbai-FB-1200x700-compressed.jpg"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dadar</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://previews.123rf.com/images/dinodia/dinodia1709/dinodia170916632/85793042-aerial-view-of-mahim-and-matunga-bombay-mumbai-maharashtra-india.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Matunga</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.99acres.com/microsite/articles/files/2023/02/Luxury-housing-market-in-Wadala.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Vadala</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></>)} 
    </div>
  );
};

export default Featured;
