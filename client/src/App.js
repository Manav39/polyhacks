import React from 'react'
import './App.css';
import Landing from './pages/Landing';
import {Routes,Route} from 'react-router-dom';
import Mentorship from './pages/Mentorship';
import Compete from './pages/Compete';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
import Jobs from './pages/Jobs';
import Quiz from './pages/Quiz';
import Tutorial from './pages/Tutorial';
import Profile from './pages/Profile';
import {useFirebase } from './context/Firebase'
import {useNavigate} from 'react-router-dom'
import IndividualJob from './pages/IndividualJob';
import CreateJob from './pages/CreateJob';
function App() {
  const firebase = useFirebase();
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/mentorship' element={<Mentorship />} />
        <Route path='/compete' element={<Compete />} />
        <Route path='/login' element ={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/quiz' element={<Quiz />}/>
        <Route path='/jobs' element={<Jobs />}/>
        <Route path='/tutorials' element={<Tutorial/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/jobs/byId/:id" element={<IndividualJob/>}></Route>
        <Route path="/jobs/createjob" element={<CreateJob/>}></Route>
      </Routes>
    </div>
  );
}

export default App;