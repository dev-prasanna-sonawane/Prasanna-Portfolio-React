import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./Portfolio.css";
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Profile from './components/Profile';

function Portfolio() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Portfolio;
