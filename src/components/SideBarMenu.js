import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import VideogameSlider from "./VideogameSlider";
import SliderUpcoming from "./SliderUpcoming"
import { Dropdown } from "react-bootstrap";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

function SideBarMenu() {

const [theme, setTheme] = useState('light');

const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
}

useEffect(() => {
  document.documentElement.className = theme;
}, [theme])


    return (
        <div className="container-fluid">
            <div className="row" >
            <button
        onClick={toggleTheme}
        className="p-2 bg-gray-800 dark:bg-gray-800 text-white"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <div className="bg-dark col-auto col-md-2 min-vh-100">
            <a className="text-decoration-none text-white d-flex align-items-center">
                <span className="ms-1 fs-3">Browse</span> 
            </a>
            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <Dropdown>
                        <Dropdown.Toggle 
                        className="text-white fs-4 bg-dark border-0" 
                        id="consoleDropdown"
                        >
                            <i className="bi bi-controller"></i>
                            <span className="ms-2">Console</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="text-white fs-4 bg-dark border-0">
                                <FormGroup 
                                sx={{
                                    color: 'primary.main',
                                    '&.Mui-checked': {
                                        color: 'primary.main',
                                    },
                                        '& .MuiSvgIcon-root': {
                                        borderRadius: 1, 
                                        border: '2px solid white', 
                                    },
                                    }} className="text-white">
                                        <FormControlLabel control={<Checkbox />} label="Nintendo"/>
                                        <FormControlLabel control={<Checkbox />} label="Play Station"/>
                                        <FormControlLabel control={<Checkbox />} label="Xbox"/>
                                        <FormControlLabel control={<Checkbox />} label="PC"/>
                                        <FormControlLabel control={<Checkbox />} label="Mobile"/>
                                    </FormGroup>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    </ul>
                    <ul className="nav nav-pills flex-column"> 
                    <li className="nav-item">
                            <Dropdown>
                                <Dropdown.Toggle 
                                    className="text-white fs-4 bg-dark border-0" 
                                    id="consoleDropdown"
                                >
                                    <i className="bi bi-joystick"></i>
                                    <span className="ms-2">Genres</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="text-white fs-4 bg-dark border-0">
                                <FormGroup
                                sx={{
                                    color: 'primary.main',
                                    '&.Mui-checked': {
                                      color: 'primary.main',
                                    },
                                    '& .MuiSvgIcon-root': {
                                      borderRadius: 1, 
                                      border: '2px solid white', 
                                    },
                                  }} className="text-white">
      <FormControlLabel control={<Checkbox />} label="Action" />
  <FormControlLabel control={<Checkbox />} label="Indie" />
  <FormControlLabel control={<Checkbox />} label="Adventure" />
  <FormControlLabel control={<Checkbox />} label="RPG" />
  <FormControlLabel control={<Checkbox />} label="Strategy" />
  <FormControlLabel control={<Checkbox />} label="Shooter" />
  <FormControlLabel control={<Checkbox />} label="Casual" />
  <FormControlLabel control={<Checkbox />} label="Simulation" />
  <FormControlLabel control={<Checkbox />} label="Puzzle" />
  <FormControlLabel control={<Checkbox />} label="Arcade" />
  <FormControlLabel control={<Checkbox />} label="Platformer" />
  <FormControlLabel control={<Checkbox />} label="Racing" />
  <FormControlLabel control={<Checkbox />} label="Massively Multiplayer" />
  <FormControlLabel control={<Checkbox />} label="Sports" />
  <FormControlLabel control={<Checkbox />} label="Fighting" />
  <FormControlLabel control={<Checkbox />} label="Family" />
  <FormControlLabel control={<Checkbox />} label="Board Games" />
  <FormControlLabel control={<Checkbox />} label="Educational" />
  <FormControlLabel control={<Checkbox />} label="Card" />
</FormGroup>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
                <div className="col bg-gray-100 dark:bg-black">
                    <VideogameSlider/>
                    <SliderUpcoming/>
                </div>
            </div>
        </div>
    );
}

export default SideBarMenu;
