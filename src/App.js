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
  );
}

export default App;
