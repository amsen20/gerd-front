import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./auth/Login";
import Hall from "./hall/Hall";
import Room from "./room/Room";
import "./index.css"

ReactDOM.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Hall/>} />
          <Route path="/:roomNameId" element={<Room/>} />
          <Route path="/login" element={<Login/>} />
      </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
