import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import "./login.css";


const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined
  });

  
  const { loading, error, dispatch,Logged } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  

  const handleClick = async (e) => {
    e.preventDefault();//to avoid refresh our page
    
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  
  return (
    <div className="log">
      <h1 style={{marginBottom:"30px" }}>Welcome Back</h1>
        <div className="container">        
        <h2>Login</h2>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button type="submit" className="signIn" disabled={loading} onClick={handleClick} >
          Sign In
        </button>
        {error && <span >{error.message}</span>}
        <p>Don't have an account?<Link id="signUp" to={"/register"} > Sign Up</Link></p>
      </div>
       
     
      
    </div>
  );
};



export default Login;
