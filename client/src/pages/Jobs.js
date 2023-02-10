import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import './Jobs.css'

const Jobs = () => {
  const [listOfJobs, setlistOfJobs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8800/jobs/").then((response)=>{
      setlistOfJobs(response.data)
    })
  })
  const navigate=useNavigate()
  return (
    <div className='jobspage'>
      <div className="createjob">
        <button type="submit" onClick={()=>{
          navigate('/jobs/createjob')
        }}>create job</button>
      </div>
    {listOfJobs.map((value)=>{
           return (
            
            <div className="post" onClick={()=>{
              navigate(`/jobs/byId/${value._id}`)
            }}>
            <div className="title">{value.jobCreator}</div>
            
            <div className="body">{value.jobTitle}</div>
            <div className="title">{value.jobDomain}</div>
            <div className="title">{value.skillsRequired}</div>
            <div className="title">{value.salaray}</div>
            </div>
           )}
    )}
    </div>
  )
}

export default Jobs