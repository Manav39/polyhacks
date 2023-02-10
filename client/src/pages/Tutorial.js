import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import "./Tutorial.css";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
const Tutorial = () => {
  const navigate = useNavigate();
  const [tuts, settuts] = useState([]);
  const [searchTerm, SetSearchTerm] = useState("programming");
  const ur = "https://youtube-v3-alternative.p.rapidapi.com/search";
  const options = {
    method: "GET",
    url: "https://simple-youtube-search.p.rapidapi.com/search",
    params: { query: searchTerm, safesearch: "false" },
    headers: {
      "X-RapidAPI-Key": "ce21477569msha88bc138e6ff5f7p14ec46jsnd519170fe3b1",
      "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios.get(`${ur}`, options).then((name) => settuts(name.data["results"]));
  }, [searchTerm]);
  console.log(tuts);
  return (
    <>
      <TextField
        id="outlined-multiline-flexible"
        label="Free Videos"
        multiline
        maxRows={4}
        onChange={(e) => SetSearchTerm(e.target.value)}
        sx={{ width: "200px", marginTop: "20px" }}
      />
      {tuts.map((value) => {
        return (
          <>
            <div>
              {/* <Button
        variant="contained"
       onClick={handleSubmit}
      >
        Search
      </Button> */}
              <div id="container">
                <div className="product-details">
                  <h5 style={{ textAlign: "left" }}>{value["title"]}</h5>

                  <h5 style={{ marginTop: "20px" }}>
                    Duration : {value["duration_formatted"]}
                  </h5>

                  <h5 style={{ marginTop: "20px" }}>
                    Views : {value["views"]}
                  </h5>

                  <h5 style={{ marginTop: "20px" }}>
                    Channel Name : {value["channel"]["name"]}
                  </h5>

                  <Button
                    variant="contained"
                    href={value["url"]}
                    target="_blank"
                  >
                    View
                  </Button>
                  <center>
                    &nbsp;
                    <button
                      className="btn"
                      style={{ marginTop: "20px" }}
                      onClick={() => <Link to="/courses">About More</Link>}
                    ></button>
                  </center>
                </div>

                <div className="product-image">
                  <img
                    src={value["thumbnail"]["url"]}
                    alt=""
                    style={{ objectFit: "content" }}
                  />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Tutorial;
