import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [username,setusername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate=useNavigate();
  
  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post('/auth/register', {
        username,
        email,
        password,
      });
      alert('Registration successful. Now you can log in');
      navigate("/login");
    } catch (e) {
      alert('Registration failed. Please try again later');
    }
  }
  return (
    
    <div className="register" >
        <div className="container">        
            <h2>Sign Up</h2>
            <form  onSubmit={registerUser}>
            <input type="text"
                    placeholder="John Doe"
                    value={username}
                    onChange={ev => setusername(ev.target.value)} />
            <input type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={ev => setEmail(ev.target.value)} />
            <input type="password"
                    placeholder="password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)} />
            <button type="submit" className="signUp" value="Sign Up" >Sign Up</button>
            
            </form>
            <p>Already have an account? <Link id="signIn"  to={'/login'}>Sign in</Link></p>
        
        </div>
    </div>
  );
}



export default Register;