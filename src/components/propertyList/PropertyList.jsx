import useFetch from "../../hooks/useFetch.js";
import "./propertyList.css";

const PropertyList = () => {
  const {data,loading, error}=useFetch("/rooms/countByType");

  const images = [
   "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg",
    "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-439391.jpg&fm=jpg",
    "https://i0.wp.com/iascoachings.com/wp-content/uploads/2019/06/203.jpg?resize=780%2C470&ssl=1",
    ];

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ): (
        <>
        {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
       </> )}
    </div>
  );
};

export default PropertyList;
