import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from './App';
import About from "./Components/About"
import Service from "./Components/Service"
import Payment from "./Components/Payment"
import Contact from "./Components/Contact"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/payment" element={<Payment/>}></Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
/*

      <Route path="/payment" element={<Payment/>}></Route>
      */

      /*

      <Route path="/contact" element={<Contact/>}></Route>
      */
