import React, { useEffect, useState } from "react";
import udemy from "../assets/udemy.png";
import coursera from "../assets/coursera.png";
import edx from "../assets/edx.png";
import udacity from "../assets/udacity.png";
import plural from "../assets/plural.jfif";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import TextField from '@mui/material/TextField';
import axios from "axios";

const Courses = () => {
  const items = [udemy, coursera, edx, udacity, plural];
  const [courses, setCourses] = useState([]);
  const [url, setUrl] = useState([]);
  const [names, setNames] = useState([]);
  const [instructor, setInstructor] = useState([]);
  const [searchTerm, SetSearchTerm] = useState("");
  const BASE_URL =
    "https://udemy-course-scrapper-api.p.rapidapi.com/course-names";
  useEffect(() => {
    const options = {
      url: BASE_URL,
      headers: {
        "X-RapidAPI-Key": "57e77c877dmsh2c484ae2d0fb83cp1ab21fjsn36f8054881d6",
        "X-RapidAPI-Host": "udemy-course-scrapper-api.p.rapidapi.com",
      },
    };

    axios.get(`${BASE_URL}`, options).then((name) => setNames(name.data));

    axios
      .get(`${BASE_URL}/course-instructor`, options)
      .then((name) => setInstructor(name.data));

    axios
      .get(`${BASE_URL}/course-instructor/course-url`, options)
      .then((name) => setCourses(name.data));
  }, []);
  const j = 0;
  for (var id in courses) {
    url[id] = [
      courses[id]["course url"],
      [names[id]["course_name"]][0],
      [instructor[id]["instructor"]][0],
    ];
  }

  return (
    <>
    <TextField
          id="outlined-multiline-flexible"
          label="Courses"
          multiline
          maxRows={4}
          onChange={(e) => SetSearchTerm(e.target.value)}
          sx={{width:'200px',marginTop:'20px'}}
        />
    <div className="row">
      {/* <input type="text" onChange={(e) => SetSearchTerm(e.target.value)} /> */}
      {url
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (val[1].toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        })
        .map((u) => {
          return (
            <div className="col-3" style={{ marginTop: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={items[Math.floor(Math.random() * items.length)]}
                />
                <Card.Body>
                  <Card.Title>{u[1]}</Card.Title>
                  <Card.Text>Online Course</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{u[2]}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href={u[0]} target="_blank">
                    Course Link
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </div>
    </>
  );
};

export default Courses;
