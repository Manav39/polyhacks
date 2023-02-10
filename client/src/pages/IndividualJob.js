import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './IndividualJob.css'

function IndividualJob() {
    let {id}=useParams()

    const [individualJob,setindividualJob]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8800/jobs/byId/${id}`).then((response)=>{
           setindividualJob(response.data);
        })   
    })
  return (
    <div>
                <div className="postPage">
                <div className="leftSide">
                <div className="title">{individualJob.jobCreator}</div>
                <div className="body">{individualJob.jobTitle}</div>
                <div className="body">{individualJob.jobDomain}</div>
                <div className="body">{individualJob.skillsRequired}</div>
             <div className="footer">{individualJob.salaray}</div>

              </div>
                <div className="rightSide">
                    <h1>Apply comes here</h1>
                </div>
            </div>
            
    </div>
  )
}

export default IndividualJob