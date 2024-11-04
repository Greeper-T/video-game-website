import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

function FilteredGames({ selectedPlatforms, selectedGenres, searchQuery }) {
  const [games, setGames] = useState([]);
  const apiUrl = "https://api.rawg.io/api/games?key=914505b770ea4da29ba05daa4e0899cf";

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setGames(response.data.results);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    };

    fetchGameData();
  }, []);

  const filteredGames = games.filter((game) => {
    const matchesPlatform = selectedPlatforms.length
      ? game.platforms.some((p) => selectedPlatforms.includes(p.platform.name))
      : true;
    const matchesGenre = selectedGenres.length
      ? game.genres.some((g) => selectedGenres.includes(g.name))
      : true;
    const matchesSearch = searchQuery
      ? game.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return matchesPlatform && matchesGenre && matchesSearch;
  });

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Popular Games</h1>
      <div className="row">
        {filteredGames.map((game) => (
          <Card key={game.id} style={{ width: "10rem" }} className="dark:bg-gray-600">
            <Card.Img variant="top" src={game.background_image} alt="Game Image" />
            <Card.Body>
              <Card.Title className="dark:text-white">{game.name}</Card.Title>
              <Card.Text>{game.released}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default FilteredGames;

