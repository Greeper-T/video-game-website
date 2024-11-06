import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

function FilteredGames({ selectedPlatforms, selectedGenres }) {
  const [games, setGames] = useState([]);
  const baseApiUrl = "https://api.rawg.io/api/games?key=914505b770ea4da29ba05daa4e0899cf";

  // Map platforms and genres to API values
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

  const mappedPlatforms = selectedPlatforms.map(platform => platformMapping[platform]).filter(Boolean);
  const mappedGenres = selectedGenres.map(genre => genreMapping[genre]).filter(Boolean);

  // Construct API URL
  let apiUrl = baseApiUrl;
  if (mappedGenres.length > 0) apiUrl += `&genres=${mappedGenres.join(",")}`;
  if (mappedPlatforms.length > 0) apiUrl += `&platforms=${mappedPlatforms.join(",")}`;

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setGames(response.data.results || []);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    };

    fetchGameData();
  }, [mappedPlatforms, mappedGenres]); // Fetch data again if filters change

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Filtered Games</h1>
      <div className="row">
        {games.length > 0 ? (
          games.map((game) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={game.id}>
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
          <p className="text-center text-gray-500">No games found for selected filters.</p>
        )}
      </div>
    </div>
  );
}

export default FilteredGames;
