import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import VideogameSlider from "./VideogameSlider";
import SliderUpcoming from "./SliderUpcoming";
import FilteredGames from "./FilteredGames";
import { Dropdown, Button } from "react-bootstrap";
import { FormGroup, FormControlLabel, Checkbox, TextField } from "@mui/material";
import TopRatedThisYear from "./TopRatedThisYear";

function SideBarMenu() {
  const [theme, setTheme] = useState('light');
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [genreOpen, setGenreOpen] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [console, setConsole] = useState(false);
  const [genre, setGenre] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handlePlatformChange = (event) => {
    const { checked, value } = event.target;
    setSelectedPlatforms((prevPlatforms) =>
      checked ? [...prevPlatforms, value] : prevPlatforms.filter((platform) => platform !== value)
    );
  };

  const handleGenreChange = (event) => {
    const { checked, value } = event.target;
    setSelectedGenres((prevGenres) =>
      checked ? [...prevGenres, value] : prevGenres.filter((genre) => genre !== value)
    );
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // Update console and genre based on selectedPlatforms and selectedGenres
  useEffect(() => {
    setConsole(selectedPlatforms.length > 0);
    setGenre(selectedGenres.length > 0);
  }, [selectedPlatforms, selectedGenres]);

  const handleSearch = () => {
    // Implement search functionality based on searchQuery here if needed
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`col-auto col-md-2 min-vh-100 ${theme === 'light' ? 'bg-dark' : 'bg-gray-900'}`} 
          style={{ position: 'sticky', top: '0', height: '100vh', overflowY: 'auto' }}
        >
          <button
            onClick={toggleTheme}
            className={`p-2 ${theme === 'light' ? 'bg-dark text-white' : 'bg-gray-900 text-white'}`}
          >
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
          <a className="text-decoration-none text-white d-flex align-items-center">
            <span className="ms-1 fs-3">Browse</span>
          </a>
          <div style={{ marginBottom: consoleOpen ? '220px' : '0' }}>
            <Dropdown onToggle={(isOpen) => setConsoleOpen(isOpen)} show={consoleOpen}>
              <Dropdown.Toggle
                className="text-white fs-4 bg-dark border-0"
                id="consoleDropdown"
              >
                <i className="bi bi-controller"></i>
                <span className="ms-2">Console</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-dark text-white">
                <FormGroup>
                  {["Nintendo", "Play Station", "Xbox", "PC", "Mobile"].map((label) => (
                    <FormControlLabel
                      key={label}
                      control={<Checkbox value={label} onChange={handlePlatformChange} style={{ color: 'white' }} />}
                      label={label}
                      className="text-white"
                    />
                  ))}
                </FormGroup>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div style={{ marginBottom: genreOpen ? '200px' : '0' }}>
            <Dropdown onToggle={(isOpen) => setGenreOpen(isOpen)} show={genreOpen}>
              <Dropdown.Toggle
                className="text-white fs-4 bg-dark border-0"
                id="genreDropdown"
              >
                <i className="bi bi-joystick"></i>
                <span className="ms-2">Genres</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-dark text-white">
                <FormGroup>
                  {[
                    "Action", "Indie", "Adventure", "RPG", "Strategy", "Shooter", "Casual", "Simulation", 
                    "Puzzle", "Arcade", "Platformer", "Racing", "Massively Multiplayer", "Sports", 
                    "Fighting", "Family", "Board Games", "Educational", "Card"
                  ].map((label) => (
                    <FormControlLabel
                      key={label}
                      control={<Checkbox value={label} onChange={handleGenreChange} style={{ color: 'white' }} />}
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
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '60%' }}
            />
            <Button 
              variant="contained"
              onClick={handleSearch}
              style={{ marginLeft: '10px' }}
            >
              Search
            </Button>
          </div>
          <div>
            {console || genre ? (
              <FilteredGames selectedPlatforms={selectedPlatforms} selectedGenres={selectedGenres} />
            ) : (
              <>
                <VideogameSlider /> 
                <SliderUpcoming />
                <TopRatedThisYear />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarMenu;
