
import { useNavigate } from "react-router-dom";
import "./postList.css"


  

const MailList = () => {

  const navigate = useNavigate();
  const handleClick= ()=>{
     
    navigate("/GetOwner");
  
}
  return (
    <div className="mail">
      <h1 className="mailTitle">Post your Room Now!</h1>
      <span className="mailDesc">Get candidates for your room !</span>
      <div className="mailInputContainer">
        
        <button onClick={handleClick}>Post</button>
      </div>
    </div>
  )
}

export default MailList;