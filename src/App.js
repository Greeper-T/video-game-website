<<<<<<< HEAD
import { Stack } from 'react-bootstrap';
import './App.css';
import VideogameSlider from './components/VideogameSlider';
import 'bootstrap/dist/css/bootstrap.min.css'
import SortMenu from './components/SortMenu';
import SideBarMenu from './components/SideBarMenu';
import cardDisplay from './components/cardDisplay';
import SliderUpcoming from './components/SliderUpcoming';
import { useState, useEffect } from 'react';

function App() {
  return (
    <cardDisplay/>
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBarMenu from "./components/SideBarMenu";
import GameDetails from "./components/GameDetails";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SideBarMenu/>} />
        <Route path="/game/:id" element={<GameDetails/>} />
      </Routes>
    </Router>
>>>>>>> main
  );
}

export default App;
