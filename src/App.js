import React from 'react';
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import Forms from './Components/Forms/index';
import Edit from './Components/Forms/Edit';
import Home1 from './Components/Forms/Home1';
import Users from './Components/Forms/Users';
import Home from './Components/Forms/Home';


function App() {
  return (
    <div className="">
      <Home1 />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/forms' element={<Forms />}></Route>
        <Route path='/edit' element={<Edit />}></Route>
        <Route path='/users' element={<Users />}></Route>
      </Routes>

    </div>
  );
}

export default App;