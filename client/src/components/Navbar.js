import React from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { Avatar } from "@mui/material";
import avatar from "../assets/avatar.jpg";
const Navbar = () => {
  const firebase = useFirebase();
console.log("user2nav", firebase?.user);

  return (
    <div
      style={{ height: "12vh", backgroundColor: "black", paddingTop: "25px" }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          listStyleType: "none",
        }}
      >
         <li>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "white", fontSize: "25px" }}
          >
            Platform Name
          </Link>
        </li>
        {firebase.isLoggedIn && <>
            <li>
          <Link
            to="/compete"
            style={{ textDecoration: "none", color: "white", fontSize: "25px" }}
          >
            Compete
          </Link>
        </li>
        <li>
          <Link
            to="/mentorship"
            style={{ textDecoration: "none", color: "white", fontSize: "25px" }}
          >
            Mentorship
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            style={{ textDecoration: "none", color: "white", fontSize: "25px" }}
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            to="/jobs"
            style={{ textDecoration: "none", color: "white", fontSize: "25px" }}
          >
            Jobs
          </Link>
        </li>
        <li>
          <Link
            to="/quiz"
            style={{ textDecoration: "none", color: "white", fontSize: "25px" }}
          >
            Quiz
          </Link>
        </li>
        <li>
          <Link
            to="/tutorials"
            style={{ textDecoration: "none", color: "white", fontSize: "25px" }}
          >
            Tutorials
          </Link>
        </li></>}
        
        <li>
          {!firebase.isLoggedIn ? (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <p style={{ right: "0", fontSize: "20px", marginLeft: "20px" }}>
                Login
              </p>
            </Link>
          ) : (
            <Link to="/profile" style={{ textDecoration: "none", color: "white" }}>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    right: "0",
                    fontSize: "20px",
                    marginLeft: "10px",
                    display: "flex",
                  }}
                >
                  {firebase.user?.displayName
                    ? firebase.user.displayName
                    : firebase.user.email}{" "}
                  &nbsp;
                </p>

                <Avatar
                  alt="User"
                  src={
                    firebase.user.photoURL === null
                    ? avatar
                    : firebase.user.photoURL
                  }
                  style={{ objectFit: "contain" }}
                />
              </div>
            </Link>
          )}
        </li> 
      </ul>
    </div>
  );
};

export default Navbar;
