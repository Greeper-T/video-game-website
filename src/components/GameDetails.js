import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=YOUR_API_KEY`);
        setGame(response.data);
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    };
    fetchGameDetails();
  }, [id]);

  if (!game) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{game.name}</h1>
      <img src={game.background_image} alt="Game Background" />
      <p>{game.description_raw}</p>
      <p>Release Date: {game.released}</p>
      {/* Add any additional game details here */}
    </div>
  );
}

export default GameDetails;
