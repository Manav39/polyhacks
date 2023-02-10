import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFirebase } from "../context/Firebase";
import "./Jobs.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import job1 from "../assets/job1.png";
import job2 from "../assets/job2.jfif";

import job3 from "../assets/job3.jfif";
import CreateJob from './CreateJob'
import Button from 'react-bootstrap/Button';
import "./Jobs.css";

const Jobs = () => {
  const j = [job1, job2, job3];

  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const firebase = useFirebase();
  firebase?.AllJobs().then((jobs) => setJobs(jobs.docs));
  //   const [listOfJobs, setlistOfJobs] = useState([]);
  //   useEffect(() => {
  //     axios.get("http://localhost:8800/jobs/").then((response)=>{
  //       setlistOfJobs(response.data)
  //     })
  //   })
  //   const navigate=useNavigate()
  return (
    <div className="jobspage">
      <div className="createjob">
      {!firebase.jobrec && <Button
          varaint="success"
          type="submit"
          onClick={() => {
            navigate("/jobs/createjob");
          }}
          style={{marginTop:'20px',padding:'30px',borderRadius:'20px',backgroundColor:'green'}}
        >
          create job
        </Button>}
      </div>
      {jobs.map((job) => {
        return (
          //   <Card style={{ width: "18rem" }}>
          //     <Card.Body>
          //       <Card.Title>{job.data().create}</Card.Title>
          //       <Card.Subtitle className="mb-2 text-muted">
          //         {job.data().title}
          //       </Card.Subtitle>
          //       <Card.Text>{job.data().skill}</Card.Text>
          //       <Card.Subtitle className="mb-2 text-muted">
          //         {job.data().salary}
          //       </Card.Subtitle>
          //       <Card.Link href="#">Apply Now</Card.Link>
          //     </Card.Body>
          //   </Card>
          <div>
            <div id="container">
              <div className="product-details">
                <center>
                  <h1 style={{ marginLeft: "0px", marginBottom: "20px" }}>
                   {job.data().create}
                  </h1>
                </center>
                <br />
                <h1>ROLE : {job.data().title}</h1>
                
                <h1>SKILLS : {job.data().skill} </h1>
                <h1>SALARY : {job.data().salary}</h1>
                
                <Button variant="contained" style={{marginTop:'20px'}}>Apply</Button>
              </div>
              <div className="product-image">
                <img src={j[1]} alt="" style={{ objectFit: "cover" }} />
              </div>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
