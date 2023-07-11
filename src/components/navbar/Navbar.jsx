import { useContext } from "react";
import "./navbar.css";
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext.js";


const Navbar = () => {

  const {user,dispatch,Logged}= useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();//to avoid refresh our page
    
    dispatch({ type: "LOGOUT" });
    navigate("/");
    
  };

  const regClick= ()=>{
     
      navigate("/register");
    
  }
  const logClick= ()=>{
     
    navigate("/login");
  
}
  

  
  return (
    <div className="navbar">
      <div className="navContainer">
      <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
        <span className="logo">BTB</span>
      </Link>
        
        {user ? user.username    : (<div className="navItems">
          <button onClick={regClick} className="navButton">Register</button>
          <button onClick={logClick} className="navButton">Login</button>
        </div>)}
      </div>
      {Logged && (
        <div className="navItems">          
          <button onClick={handleClick} className="navButtonLog">Logout</button>
        </div>
      )

      }
    </div>
  )
}

export default Navbar;