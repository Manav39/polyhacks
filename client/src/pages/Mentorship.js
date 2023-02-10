import React from "react";
import Image from "../assets/mentorship.png";
import "./Mentorship.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Person1 from '../assets/Person1.png';
import Person2 from '../assets/Person2.png';
import Person3 from '../assets/Person3.png';
import Person4 from '../assets/Person4.png';
import Person5 from '../assets/Person5.png';
import Person6 from '../assets/Person6.png';
import BGImg from '../assets/about-bg.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Mentorship = () => {
  const data=[
    {
      "Name":"Bob Shawn",
      "Expertise": "JavaScript",
      "Qualification": "MTech(Computer Engineering)",
      "ContactDetails": "Dummy@gmail.com",
      "Image":Person1,
      "Padding":"30px"
    },
    {
      "Name":"Greg Marley",
      "Expertise": "SQL Database",
      "Qualification": "MTech(Information Technology)",
      "ContactDetails": "Dummy@gmail.com",
      "Image":Person2,
      "Padding":"20px"
    },
    {
      "Name":"kane Jade",
      "Expertise": "Python Programming",
      "Qualification": "MTech(Computer Engineering)",
      "ContactDetails": "Dummy@gmail.com",
      "Image":Person3,
      "Padding":"0px"

    },
    {
      "Name":"Harry Botwell",
      "Expertise": "Java Programming",
      "Qualification": "BTech(Computer Engineering)",
      "ContactDetails": "Dummy@gmail.com",
      "Image":Person4,
      "Padding":"1px"
    },
    {
      "Name":"Julia Warner",
      "Expertise": "IT for Business",
      "Qualification": "BTech(INformation Technology) MBA(Marketing)",
      "ContactDetails": "Dummy@gmail.com",
      "Image":Person5,
      "Padding":"10px"
    },
    {
      "Name":"Alan Border",
      "Expertise": "C Programming",
      "Qualification": "BTech(Computer Engineering)",
      "ContactDetails": "Dummy@gmail.com",
      "Image":Person6,
      "Padding":"20px"
    },
  ]
  return (
    <div className="Full">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div><h1>Connect with best of our experts and start learning</h1>
    <Box sx={{ flexGrow: 1, margin: '40px' , background: `${BGImg}`} }>
    <Grid container spacing={2}>
    {data.map((v)=>{
  
        return(
          
   
      <Grid item  xs={4}>
        <a><Item sx={{ paddingBottom: `${v.Padding}`}} ><img src={v.Image} alt="" />
        <p>
          <b>
            {v.Name}<br/>
          </b>
          Expertise: {v.Expertise}<br/>
          Qualification:{v.Qualification}<br/>
          Contact Details: {v.ContactDetails}<br/>
          </p>
        </Item></a>
        </Grid>
      
        )
      })}</Grid></Box>
    
      {/* <Grid item xs={4}>
        <a href="https://www.udemy.com/course/modern-javascript-from-the-beginning/"><Item><img src={Person2} alt="" />
        <p>
          <b>
            Greg Marley<br/>
          </b>
          Expertise: SQL Database<br/>
          Qualification: MTech(Information Technology)<br/>
          Contact Details: Dummy@gmail.com<br/>
        </p>
        
        </Item></a>
        
      </Grid>
      <Grid item xs={4}>
        <a href="https://www.udemy.com/course/modern-javascript-from-the-beginning/"><Item className="Pic"><img src={Person3} alt="" />
        <p>
          <b>
            Kane Jade<br/>
          </b>
          Expertise: Python Programming<br/>
          Qualification: MTech(Computer Engineering)<br/>
          Contact Details: Dummy@gmail.com<br/>
        </p>
        
        </Item></a>
        
      </Grid>
      <Grid item xs={4}>
        <a href="https://www.udemy.com/course/modern-javascript-from-the-beginning/"><Item><img src={Person6} alt="" />
        <p>
          <b>
            Harry Botwell<br/>
          </b>
          Expertise: Java Programming<br/>
          Qualification: BTech(Computer Engineering)<br/>
          Contact Details: Dummy@gmail.com<br/>
        </p>
        
        </Item></a>
        
      </Grid>
      <Grid item xs={4}>
        <a href="https://www.udemy.com/course/modern-javascript-from-the-beginning/"><Item><img sx={{ padding: "10px" }}src={Person5} alt="" />
        <p>
          <b>
            Julia Warner<br/>
          </b>
          Expertise: IT for Business<br/>
          Qualification: BTech(Information Technology) MBA(Marketing)<br/>
          Contact Details: Dummy@gmail.com<br/>
        </p>
        
        </Item></a>
        
      </Grid>
      <Grid item xs={4} sx={{textDecoration:'none'}}>
        <a  href="https://www.udemy.com/course/modern-javascript-from-the-beginning/"><Item><img src={Person4} alt="" />
        <p >
          <b>
            Aln Border<br/>
          </b>
          Expertise: C Programming<br/>
          Qualification: BTech(Computer Engineering)<br/>
          Contact Details: Dummy@gmail.com<br/><br/>
        </p>
        
        </Item></a>
        
      </Grid>
    </Grid>
  </Box>
     */}

</div>
</div>
  );
};

export default Mentorship;