import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Landingpage from "./pages/Landingpage";
import './bootstrap/css/bootstrap.css';
import './css/index.css'
import './css/porto1.css'
import Detail from "./pages/DetailProject";
import Explore from "./pages/previewproject2";
import Exploremore from "./pages/Eksplorpage";
import AOS from "aos";
import {useEffect} from "react";

/* kaya index html aplikasi utamanya */

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, []);
  
  return(
    <Routes>
      <Route path="/" element={<Landingpage/>} />
      <Route path="/:id" element={<Detail />} />
      <Route path="/explore/:id" element={<Explore />} />
      <Route path="/explore" element={<Exploremore />} />
    </Routes>
  );
}

export default App;
