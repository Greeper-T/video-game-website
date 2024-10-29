import { Stack } from 'react-bootstrap';
import './App.css';
import VideogameSlider from './components/VideogameSlider';
import 'bootstrap/dist/css/bootstrap.min.css'
import SortMenu from './components/SortMenu';
import SideBarMenu from './components/SideBarMenu';
import SliderUpcoming from './components/SliderUpcoming';
import { useState, useEffect } from 'react';

function App() {

const [theme, setTheme] = useState('light');

const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
}

useEffect(() => {
  document.documentElement.className = theme;
}, [theme])

  return (
    <div className="min-h-screen p-4 dark:bg-black">
      <button
        onClick={toggleTheme}
        className="p-2 bg-gray-200 dark:bg-gray-800 dark:text-white"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <SideBarMenu/>
      <SortMenu/>
      <VideogameSlider/>
      <SliderUpcoming/>
    </div>
    
  );
}

export default App;
