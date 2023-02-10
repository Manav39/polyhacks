import React from 'react'
import "./profile.css"
import avatar from '../assets/avatar.jpg'
import { useFirebase } from '../context/Firebase'
import Avatar from '@mui/material/Avatar';
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
ChartJS.register(
    BarElement,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    Tooltip,
    Legend,
)


const Profile = () => {
  const firebase = useFirebase()
  const data={
    labels:['next week','pending','Completed'],
    datasets:[
        {
            data:[3,6,9],
            backgroundColor:['yellow','red','green'],
            borderColor:'black',
            borderWidth:1,
        }
    ]
  }
  const options={

  }

  const data1={
    labels:['Mon','Tue','Wed','Thur','Fri'],
    datasets:[
        {
            label:'369',
            data:[3,6,9,7,4],
            backgroundColor:'yellow',
            borderColor:'black',
            borderWidth:1,
        },
        {
            label:'322',
            data:[3,6,9,7,4],
            backgroundColor:'red',
            borderColor:'black',
            borderWidth:1,
        }
    ]
  }
  const options1={

  }
  const data2={
    labels:['Jan','Feb','Mar'],
    datasets:[
        {
            label:'Progress',
            data:[3,5,10],
            backgroundColor:'yellow',
            borderColor:'black',
            pointBorderColor:'red',
            fill:true,
            tension:0.4,
        },
        {
            label:'Time used',
            data:[2,7,9],
            backgroundColor:'blue',
            borderColor:'black',
            pointBorderColor:'red',
            fill:true,
            tension:0.4,
        }
    ]
}
const options2={
    plugin:{
        legend:true
    },
    scales:{
        y:{
            min:3,
            max:12
        }
    }
}

  return (
    <>
    <div className = "container" style={{display:'flex'}}> 
      <div className = "image" style={{marginLetf:'50px'}}>
            <Avatar alt="Remy Sharp" src={firebase.user.photoURL ? firebase.user.photoURL : avatar} sx={{ width: 150, height: 150 }}/>
        <div className = "Name">
          {firebase.user.displayName}
        </div>
        <div className = "Content">
          <div>
            I am a student in Shri Bhagubhai
          Mofatlal Polytechnic.
          </div>
          <div>
          Status : Student
          </div>  
          Skills : React JS, Python, PHP
        </div>
      </div>
      <div className = "LineChart" style={{ padding: "20px", width: "800px" ,marginLeft:'300px'}}>
        <Line data={data2} options={options2}/>
        LineChart
      </div>  
    </div>
    <div className = "Chart" style={{display:'flex'}}> 
        <div className = "PieChart" style={{
            padding:'20px',
            width:'400px',
            
        }}>
            <Pie data={data} options={options}/>
        PieChart
        </div>
        <div className = "BarChart" style={{padding:'30px',width:'800px'}}>
            <Bar  data={data1} options={options1}/>
        BarChart
        </div>
    </div>    
        
    </>
  )
}
export default Profile

// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import React from 'react'
// import "./profile.css"
// import { useFirebase } from '../context/Firebase'
// import Avatar from '@mui/material/Avatar';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   LineElement,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Pie } from "react-chartjs-2";
// import { Line } from "react-chartjs-2";
// import { Bar } from "react-chartjs-2";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// ChartJS.register(
//     BarElement,
//     LineElement,
//     PointElement,
//     CategoryScale,
//     LinearScale,
//     ArcElement,
//     Tooltip,
//     Legend,
// )


// const Profile = () => {
//   const firebase = useFirebase()
//   const data={
//     labels:['next week','pending','Completed'],
//     datasets:[
//         {
//             data:[3,6,9],
//             backgroundColor:['yellow','red','green'],
//             borderColor:'black',
//             borderWidth:1,
//         }
//     ]
//   }
//   const options={

//   }

//   const data1={
//     labels:['Mon','Tue','Wed','Thur','Fri'],
//     datasets:[
//         {
//             label:'369',
//             data:[3,6,9,7,4],
//             backgroundColor:'yellow',
//             borderColor:'black',
//             borderWidth:1,
//         },
//         {
//             label:'322',
//             data:[3,6,9,7,4],
//             backgroundColor:'red',
//             borderColor:'black',
//             borderWidth:1,
//         }
//     ]
//   }
//   const options1={

//   }
//   const data2={
//     labels:['Jan','Feb','Mar'],
//     datasets:[
//         {
//             label:'Progress',
//             data:[3,5,10],
//             backgroundColor:'yellow',
//             borderColor:'black',
//             pointBorderColor:'red',
//             fill:true,
//             tension:0.4,
//         },
//         {
//             label:'Time used',
//             data:[2,7,9],
//             backgroundColor:'blue',
//             borderColor:'black',
//             pointBorderColor:'red',
//             fill:true,
//             tension:0.4,
//         }
//     ]
// }
// const options2={
//     plugin:{
//         legend:true
//     },
//     scales:{
//         y:{
//             min:3,
//             max:12
//         }
//     }
// }

//   return (
//     <>
     

//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={1}>
//         <Grid item xs={6}>
//           <Item>
//           <div className = "container" style={{display:'flex'}}></div>  
//             <div className = "image" style={{marginLeft:'200px',paddingBottom:'100px'}}>
//             <Avatar alt="Remy Sharp" src={firebase.user.photoURL} sx={{ width: 150, height: 150 }}/>
//               <div className = "Name">
//               {firebase.user.displayName}
//               </div>
//               <div className = "Content">
//               <div>
//                I am a student in Shri Bhagubhai
//               Mofatlal Polytechnic.
//               </div>
//               <div>
//               Status : Student
//               </div>  
//               Skills : React JS, Python, PHP
//               </div>
//             </div>      
//           </Item>
//         </Grid>
//         <Grid item xs={6}>
//           <Item>
//           <div className = "LineChart" style={{ padding: "20px", width: "800px" }}>
//             <Line data={data2} options={options2}/>
//             LineChart
//             </div>
//           </Item>          
//         </Grid>
//         <Grid item xs={12}>
//           <Item>
//           <div className = "Chart" style={{display:'flex'}}> 
//               <div className = "PieChart" style={{padding:'20px',width:'400px',}}>
//               <Pie data={data} options={options}/>
//               PieChart
//               </div>
//           <div className = "BarChart" style={{padding:'30px',width:'800px'}}>
//               <Bar  data={data1} options={options1}/>
//               BarChart
//               </div>
//           </div>
//           </Item>
//         </Grid>
//       </Grid>
//     </Box>

    
        
        
//     </>
//   )
// }

// export default Profile