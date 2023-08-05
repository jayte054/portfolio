import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/homepage';
import { Authentication } from './authentication/auth';


function App() {
  return (
    <React.Fragment>
     {/* <Router>
        <Routes>
           <Route path = "/" element = {<Homepage />} />
           <Route path = "/auth" element = {<Authentication />} />
         </Routes>
       </Router> */}
       <div>
       <Homepage />
       </div>
    </React.Fragment>
  );
}

export default App;
