import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Home, NotFound } from "./pages";
import './App.css';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
    </>
  );
}

export default App;
