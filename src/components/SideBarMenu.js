import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import VideogameSlider from "./VideogameSlider";
import SliderUpcoming from "./SliderUpcoming";
import { Dropdown } from "react-bootstrap";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

function SideBarMenu() {
  const [theme, setTheme] = useState('light');
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [genreOpen, setGenreOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="container-fluid">
      <div className="row">
        <button
          onClick={toggleTheme}
          className={`p-2 ${theme === 'light' ? 'bg-dark text-white' : 'bg-gray-900 text-white'}`}
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <div className={`col-auto col-md-2 min-vh-100 ${theme === 'light' ? 'bg-dark' : 'bg-gray-900'}`} 
          style={{ position: 'sticky', top: '0', height: '100vh', overflowY: 'auto' }}
        >
          <a className="text-decoration-none text-white d-flex align-items-center">
            <span className="ms-1 fs-3">Browse</span>
          </a>

          {/* Console Dropdown */}
          <div style={{ marginBottom: consoleOpen ? '220px' : '0' }}> {/* Adjust height based on state */}
            <Dropdown onToggle={(isOpen) => setConsoleOpen(isOpen)}>
              <Dropdown.Toggle
                className={`text-white fs-4 ${theme === 'light' ? 'bg-dark' : 'bg-dark'} border-0`}
                id="consoleDropdown"
              >
                <i className="bi bi-controller"></i>
                <span className="ms-2">Console</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className={`${theme === 'light' ? 'bg-dark' : 'bg-dark'} text-white`}>
                <FormGroup>
                  {["Nintendo", "Play Station", "Xbox", "PC", "Mobile"].map((label) => (
                    <FormControlLabel
                      key={label}
                      control={<Checkbox style={{ color: 'white' }} />}
                      label={label}
                      className="text-white"
                    />
                  ))}
                </FormGroup>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Genre Dropdown */}
          <div style={{ marginBottom: genreOpen ? '200px' : '0' }}> {/* Adjust height based on state */}
            <Dropdown onToggle={(isOpen) => setGenreOpen(isOpen)}>
              <Dropdown.Toggle
                className={`text-white fs-4 ${theme === 'light' ? 'bg-dark' : 'bg-dark'} border-0`}
                id="genreDropdown"
              >
                <i className="bi bi-joystick"></i>
                <span className="ms-2">Genres</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className={`${theme === 'light' ? 'bg-dark' : 'bg-dark'} text-white`}>
                <FormGroup>
                  {[
                    "Action", "Indie", "Adventure", "RPG", "Strategy", "Shooter", "Casual", "Simulation", 
                    "Puzzle", "Arcade", "Platformer", "Racing", "Massively Multiplayer", "Sports", 
                    "Fighting", "Family", "Board Games", "Educational", "Card"
                  ].map((label) => (
                    <FormControlLabel
                      key={label}
                      control={<Checkbox style={{ color: 'white' }} />}
                      label={label}
                      className="text-white"
                    />
                  ))}
                </FormGroup>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className={`col-md-10 ${theme === 'light' ? 'bg-gray-100' : 'bg-black'}`}>
          <VideogameSlider />
          <SliderUpcoming />
        </div>
      </div>
    </div>
  );
}

export default SideBarMenu;
