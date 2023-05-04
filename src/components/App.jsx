import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Home   } from "./Home";
import {Login } from "./Login";
import {Signup} from "./Signup";
import {NotFound} from "./NotFound";


function App () {
    return (
      
      <Router>
    

      
      <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="home" element= {<Home/>} />
          <Route path="login" element= {<Login />} />
          <Route path="signUp" element= {<Signup />} />
          <Route path="*" element= {<NotFound />} />
        </Routes>
      
      </Router>
 
    );
  }


export default App;