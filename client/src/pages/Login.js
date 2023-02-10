import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [prof, setProf] = useState("Job Seeker");

  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleGoogle = () => {
    firebase.signInGoogle();
    navigate("/");
  };

  const handleLogin = () => {
    firebase.signInUser(email, pass);
    if (firebase.isLoggedIn === true) {
      navigate("/");
    }
  };
  if(prof === 'Job Seeker')
  {
    firebase.setJobRec(true)
  }
  else{
    firebase.setJobRec(false)
  }

  return (
    <div
      style={{
        paddingLeft: "400px",
        paddingRight: "400px",
        paddingTop: "100px",
      }}
    >
      <div style={{ border: "1px solid black", padding: "20px" }}>
        <center>
          <h2>Login</h2>
        </center>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.fields)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </Form.Group>
          <select onChange={(e)=>setProf(e.target.value)} style={{width:'400px',height:'50px',borderRadius : '20px'}}>
              <option>Job Seeker</option>
              <option>Job Creator</option>
            </select>
          <center>
            <Button variant="primary" type="submit" style={{marginTop:'20px',padding:'15px'}}>
              Login
            </Button>
            <Link to="/register">
              <p style={{ paddingTop: "10px" }}>New User? Sign Up</p>
            </Link>
  
            <h3 style={{ marginTop: "10px" }}>OR</h3>
            <Button variant="danger" onClick={handleGoogle} style={{padding:'15px'}}>
              Sign In With Google
            </Button>
          </center>
        </Form>
      </div>
    </div>
    // <div className="main">
    //   <div className="sub-main">
    //     <div>
    //       <div className="imgs">
    //         <div className="container-image">
    //           <img src={profile} alt="profile" className="profile" />
    //         </div>
    //       </div>
    //       <div>
    //         <h1>Login Page</h1>
    //         <div>
    //           <img src={email} alt="email" className="email" />
    //           <input
    //             type="text"
    //             placeholder="Email"
    //             className="name"
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>
    //         <div className="second-input">
    //           <img src={pass} alt="pass" className="email" />
    //           <input
    //             type="password"
    //             placeholder="Password"
    //             className="name"
    //             onChange={(e) => setPass(e.target.value)}
    //           />
    //         </div>
    //         <div className="second-input">
    //           <select value={prof} id="colours" onChange={(e) => setProf(e)}>
    //             <option value="seek">Job Seeker</option>
    //             <option value="job">Recruiter</option>
    //           </select>
    //         </div>
    //         <div className="login-button">
    //           <button onClick={handleLogin}>Login</button>
    //         </div>
    //         OR
    //         <Button onClick={handleGoogle} variant="danger">
    //           Sign In With Google
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
};

export default Login;
