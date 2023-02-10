import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'

const Compete = () => {
  const [value, setValue] = useState("all");
  const [contest, setContest] = useState([]);
 
 
  useEffect(() => {
    
    fetch(`https://kontests.net/api/v1/${value}`)
      .then((response) => response.json())
      .then((data) => {
        setContest(data);
      })
      .catch((error) => console.error(error));
  }, [value]);

  console.log(contest)
  return (
    <div>
      {/* <TextField
        id="outlined-basic"
        label="Search contests"
        variant="outlined"
        sx={{ marginTop: "20px" ,marginBottom:'20px'}}
        onChange={(e)=>setValue(e.target.value)}
      />
      &nbsp; */}
      <Table striped bordered hover style={{width:'1200px',marginLeft:'auto',marginRight:'auto',marginTop:'20px'}}>
        <thead>
          <tr>
            <th>Contest Name</th>
            <th>Site Name</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>In 24 hours</th>
            <th>Go to the Contest</th>
          </tr>
        </thead>
        <tbody>
         {
            contest.map((con)=>{
                return(
                    <tr>
                    <td>{con.name}</td>
                    <td>{con.site}</td>
                    <td>{con.start_time}</td>
                    <td>{con.end_time}</td>
                    <td>{con.in_24_hours}</td>
                    <td><Button variant="success" href={con.url} target='_blank' style={{backgroundColor:'green' , padding :'10px'}}>Register</Button></td>
                  </tr>
                )
            })
         }
        </tbody>
      </Table>
    </div>
  );
};

export default Compete;
