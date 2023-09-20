import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'; // Import the Link component from React Router
import './App.css';


import Navbar from './Navbar';
import Login from './Login';
import Features from './Features';
import DataBook from './DataBook';
import Support from './Support'
import Homepage from './HomePage';


function App() 
{
   return(
    <div>
      <Router>
        <Navbar />
        <Routes>
            <Route path='/Homepage' exact element={<Homepage />}/>
            <Route path='/Login' element={<Login/>} />
            <Route path='/DataBook' element={<DataBook/>} />
            <Route path='/Features' element={<Features/>} />
            <Route path='/Support'element={<Support/>} />
        </Routes>
      </Router>
    </div>
   )
}

export default App;
