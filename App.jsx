import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TestVerst from './Components/Test 2/TestVerst';
import Timer from './Components/Timer/Timer';



const App = () => {
  
  return (
    <><Routes>
    <Route path="/" element={<Timer/>}/>
    <Route path="test2" element={<TestVerst/>}/>
  </Routes></>
  );
};

export default App;
