import React, { useState } from "react";
import "./CreateJob.css";
// import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from "yup";
import axios from "axios";
import { UNSAFE_DataRouterStateContext, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFirebase } from "../context/Firebase";

function CreateJob() {
  const firebase = useFirebase();

  const [create, setCreate] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [skill, setSkill] = useState("");

  const navigate = useNavigate();
  const initialValues = {
    jobCreator: "",
    jobTitle: "",
    jobDomain: "",
    skillsRequired: "",
    salaray: "",
  };
  const onSubmit = (data) => {
    axios
      .post("http://localhost:8800/jobs/createjob", data)
      .then((response) => {
        navigate("/jobs");
      });
  };
  const validationSchema = Yup.object().shape({
    jobCreator: Yup.string().required(),
    jobTitle: Yup.string().required(),
    jobDomain: Yup.string().required(),
    skillsRequired: Yup.string().required(),
    salaray: Yup.string().required(),
  });

  const handlePost = async (e) => {
    e.preventDefault();
    await firebase.UploadPost(create, title, company, salary, skill);
    navigate('/jobs')
  };

  return (
    // <div className="createPostPage">
    //     <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

    //         <Form className="formContainer">
    //             <label>Job Creator</label>
    //             <ErrorMessage name='jobCreator' component='span'/>
    //             <Field id="inputCreatePost" name="jobCreator" placeholder="Example:(user123)" />
    //             <label>Job Title</label>
    //             <ErrorMessage name='jobTitle' component='span'/>
    //             <Field id="inputCreatePost" name="jobTitle" placeholder="..."/>
    //             <label>Job Domain</label>
    //             <ErrorMessage name='jobDomain' component='span'/>
    //             <Field id="inputCreatePost" name="jobDomain" placeholder="...."/>

    //             <label>Skills Required</label>
    //             <ErrorMessage name='skillsRequired' component='span'/>
    //             <Field id="inputCreatePost" name="skillsRequired" placeholder="...."/>
    //             <label>Salary</label>
    //             <ErrorMessage name='salaray' component='span'/>
    //             <Field id="inputCreatePost" name="salaray" placeholder="...."/>
    //             <button type="submit" >Create Post</button>
    //         </Form>

    //     </Formik>
    // </div>
    <div
      className="mt-3"
      style={{ width: "500px", marginLeft: "auto", marginRight: "auto" }}
    >
      <center>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h3>Company Name</h3>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter title ... "
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h3>Title</h3>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter title ... "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h3>Job Creator</h3>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter title ... "
              value={create}
              onChange={(e) => setCreate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h3>Skills</h3>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter title ... "
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h3>Salary</h3>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter title ... "
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="success"
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
            onClick={handlePost}
          >
            Post
          </Button>
        </Form>
      </center>
    </div>
  );
}

export default CreateJob;
