import React from 'react'
import './CreateJob.css';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateJob() {
  const navigate=useNavigate()
  const initialValues={
    jobCreator:"",
    jobTitle:"",
    jobDomain:"",
    skillsRequired:"",
    salaray:""
  }
  const onSubmit=(data)=>{
    axios.post("http://localhost:8800/jobs/createjob",data).then((response)=>{
      navigate('/jobs')
    })
  }
  const validationSchema=Yup.object().shape({
    jobCreator:Yup.string().required(),
    jobTitle:Yup.string().required(),
    jobDomain:Yup.string().required(),
    skillsRequired:Yup.string().required(),
    salaray:Yup.string().required(),
  })
  return (
    <div className="createPostPage">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            
            <Form className="formContainer">
                <label>Job Creator</label>
                <ErrorMessage name='jobCreator' component='span'/>
                <Field id="inputCreatePost" name="jobCreator" placeholder="Example:(user123)"/>
                <label>Job Title</label>
                <ErrorMessage name='jobTitle' component='span'/>
                <Field id="inputCreatePost" name="jobTitle" placeholder="..."/>
                <label>Job Domain</label>
                <ErrorMessage name='jobDomain' component='span'/>
                <Field id="inputCreatePost" name="jobDomain" placeholder="...."/>
                
                <label>Skills Required</label>
                <ErrorMessage name='skillsRequired' component='span'/>
                <Field id="inputCreatePost" name="skillsRequired" placeholder="...."/>
                <label>Salary</label>
                <ErrorMessage name='salaray' component='span'/>
                <Field id="inputCreatePost" name="salaray" placeholder="...."/>
                <button type="submit" >Create Post</button>
            </Form>

        </Formik>
    </div>
  )
}

export default CreateJob;