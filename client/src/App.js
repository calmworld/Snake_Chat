import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';

import Home from './Home/Home';
import ChatRoom from "./ChatRoom/ChatRoom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/:roomId" element={<ChatRoom/>} />
      </Routes>
    </Router>
  );
}

export default App;
