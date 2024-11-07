import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FilteredGames({ selectedPlatforms, selectedGenres, searchQuery, gamez }) {
  const [games, setGames] = useState([]); // Holds the games data
  const [apiUrl, setApiUrl] = useState("https://api.rawg.io/api/games?key=914505b770ea4da29ba05daa4e0899cf"); // Base URL for the API
  const [nextUrl, setNextUrl] = useState(null); // Holds the URL for the next page of games
  const [previousUrl, setPreviousUrl] = useState(null); // Holds the URL for the previous page of games
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const platformMapping = {
    "Nintendo": "7",
    "Play Station": "18",
    "Xbox": "1",
    "PC": "4",
    "Mobile": "8"
  };

  const genreMapping = {
    "Action": "action",
    "Indie": "indie",
    "Adventure": "adventure",
    "RPG": "role-playing-games-rpg",
    "Strategy": "strategy",
    "Shooter": "shooter",
    "Casual": "casual",
    "Simulation": "simulation",
    "Puzzle": "puzzle",
    "Arcade": "arcade",
    "Platformer": "platformer",
    "Racing": "racing",
    "Massively Multiplayer": "massively-multiplayer",
    "Sports": "sports",
    "Fighting": "fighting",
    "Family": "family",
    "Board Games": "board-games",
    "Educational": "educational",
    "Card": "card"
  };

  // Map platforms and genres to API values
  const mappedPlatforms = selectedPlatforms.map(platform => platformMapping[platform]).filter(Boolean);
  const mappedGenres = selectedGenres.map(genre => genreMapping[genre]).filter(Boolean);

  // Dynamically update the API URL based on selected filters
  useEffect(() => {
    let updatedApiUrl = "https://api.rawg.io/api/games?key=914505b770ea4da29ba05daa4e0899cf";
    if (mappedGenres.length > 0) updatedApiUrl += `&genres=${mappedGenres.join(",")}`;
    if (mappedPlatforms.length > 0) updatedApiUrl += `&platforms=${mappedPlatforms.join(",")}`;
    if (gamez) updatedApiUrl += `&search=${searchQuery}`;
    
    setApiUrl(updatedApiUrl); // Set the updated API URL
  }, [mappedPlatforms, mappedGenres, searchQuery, gamez]);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setGames(response.data.results || []); // Set the game data
        setNextUrl(response.data.next); // Set the next URL for pagination
        setPreviousUrl(response.data.previous); // Set the previous URL for pagination
        setData(response.data)
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    };

    fetchGameData(); // Fetch game data whenever the apiUrl changes
  }, [apiUrl]); // Re-run the effect when the apiUrl changes

  const handleCardClick = (gameId) => {
    navigate(`/game/${gameId}`);
  };

  const handleNext = async () => {
    if (nextUrl) {
      try {
        // Fetch the next page of results using the next URL
        const response = await axios.get(nextUrl);
        setGames(response.data.results); // Update the games with new page results
        setNextUrl(response.data.next); // Update the next URL for further pages
        setPreviousUrl(response.data.previous); // Update the previous URL
      } catch (error) {
        console.error("Error fetching next page:", error);
      }
    }
  };

  const handlePrevious = async () => {
    if (previousUrl) {
      try {
        // Fetch the previous page of results using the previous URL
        const response = await axios.get(previousUrl);
        setGames(response.data.results); // Update the games with the previous page results
        setNextUrl(response.data.next); // Update the next URL for further pages
        setPreviousUrl(response.data.previous); // Update the previous URL
      } catch (error) {
        console.error("Error fetching previous page:", error);
      }
    }
  };

  // Filter games based on search query
  const filteredGames = games.filter(game =>
    game.name && game.name.toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  return (
    <div className="container mx-auto mt-10 px-4">
      <h3 className="text-2xl font-bold text-center mb-6 dark:text-white">Games: {data.count}</h3>
      <div className="d-flex justify-content-between md-4">
        <button onClick={handlePrevious} disabled={!previousUrl} className="dark:text-white">Previous Page</button>
        <button onClick={handleNext} disabled={!nextUrl} className="dark:text-white">Next Page</button>
      </div>
      <div className="row">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={game.id} onClick={() => handleCardClick(game.id)}>
              <Card style={{ width: "100%" }} className="dark:bg-gray-600">
                <Card.Img variant="top" src={game.background_image} alt="Game Image" />
                <Card.Body>
                  <Card.Title className="dark:text-white">{game.name}</Card.Title>
                  <Card.Text>{game.released}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No games found for selected filters or search term.</p>
        )}
      </div>

      {/* Buttons to navigate through pages */}
      <div className="d-flex justify-content-between mt-4">
        <button onClick={handlePrevious} disabled={!previousUrl} className="dark:text-white">Previous Page</button>
        <button onClick={handleNext} disabled={!nextUrl} className="dark:text-white">Next Page</button>
      </div>
    </div>
  );
}

export default FilteredGames;
