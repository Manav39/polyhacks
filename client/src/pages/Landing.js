import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import one from "../assets/one.jpg"
import two from "../assets/two.jpg"
import "./Landing.css"
import Image from "../assets/mentorship.png";
import "./Mentorship.css";
import { Link } from "react-router-dom";
import ImageJob from '../assets/job.jfif'
import back2 from '../assets/back2.jfif'
import ImageCourses from '../assets/img.jfif'
import { useFirebase } from '../context/Firebase';
import Footer from '../components/Footer';
const Landing = () => {

  const firebase = useFirebase()

  return (
    <>
     <Carousel style={{ width: "100%", objectFit: "cover"}}>
        <Carousel.Item>
          <div className="bg-img">
            <div className="left-portion">
              <h1>Improve your skills</h1>
              <p>
                <span style={{color:'black'}}>
                  Find out numerous opportunities across various platforms to aquire
                  new skills,get some expirience & also a chance to get hired by top
                  companies in respective domains
                </span>
              </p>
              <div className="btn_box">
                {!firebase.isLoggedIn && <><a href="/Register" class="btn-1">
                  Register
                </a>
                <a href="/Login" class="btn-2">
                  Login
                </a></>}
              </div>
            </div>
            <div className="right-portion">
              <img
                className="d-block  img-position img-fluid"
                src={one}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-img">
            <div className="left-portion">
              <h1>Opportunities</h1>
              <p style={{color:'black'}}>
                --- provides students and individuals opportunities to enhance their 
                skills to the next level and also provides a platform for various trusted 
                companies to hire talented individuals.
              </p>
              {!firebase.isLoggedIn && <><a href="/Register" class="btn-1">
                  Register
                </a>
                <a href="/Login" class="btn-2">
                  Login
                </a></>}
            </div>
            <div className="right-portion">
              <img
                className="d-block  img-position img-fluid"
                src={two}
                alt="Second slide"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="App">
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={Image} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h2 className="custom_heading">
                  
                  <span style={{color:'black'}}> Mentorship</span>
                </h2>
                <p>
                  Connect with various experts from several fields for taking thier inputs 
                  and guidance for developing new skils, learning new technologies and upgrading 
                  your capabilities. Our mentors can also help you to create contemporary projects.
                  An expert allotted to you will always be available for you to contact and ask your
                  quries and questions.

                </p>
                <div>
                  <Link to="/mentorship">About More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="App2">
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <div className="detail-box">
                <h2 className="custom_heading">
                  
                  <span style={{color:'black'}}>Jobs</span>
                </h2>
                <p>
                We strive to put job seekers first, giving them free access to search for jobs, upgarde your skills to match their requirements, and research companies. Every day, we connect millions of people to new opportunities.

                </p>
                <div>
                  <Link to="/jobs">About More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              
              <div className="img-box">
                <img src={ImageJob} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    \<div className="App3">
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={ImageCourses} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h2 className="custom_heading">
                  
                  <span style={{color:'black'}}>Courses</span>
                </h2>
                <p>
                  We’re working toward an important goal to provide flexible, effective skill development that empowers organizations and individuals. We care a lot about executing on this and how we achieve this. Our values guide how we do business and interact with each other, our instructors, our students, and our partners.

                </p>
                <div>
                  <Link to="/courses">About More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}

export default Landing

