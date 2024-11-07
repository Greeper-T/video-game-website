import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  const navigate = useNavigate();

     const handleClick = () => {
        navigate(`/`);
    };

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=914505b770ea4da29ba05daa4e0899cf`);
        setGame(response.data);
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    };
    fetchGameDetails();
  }, [id]);

  if (!game) return <div>Loading...</div>;

  return (

    <div style={{ padding: '20px', color: 'black' }}>
      <div className="row">
      <div className={`col-auto col-md-5 min-vh-75`}>
      <i className="bi bi-house-door"></i>
        <button className="" onClick={handleClick}>Home</button>
        <h1>{game.name}</h1>
        <img src={game.background_image} alt={game.name}/>
         </div>
      <div className={`col-auto col-md-1 min-vh-75`}>
        </div>
        <div className={`col-auto col-md-6 min-vh-75 fs-4` }>
          <br/>
          <br/>
          <br/>
        <strong className="fs-1">Details:</strong>
      <p><strong>Release Date:</strong> {game.released}</p>
      <p><strong>Developer:</strong> {game.developers?.map(dev => dev.name).join(', ')}</p>
      <p><strong>Genres:</strong> {game.genres?.map(genre => genre.name).join(', ')}</p>
      <p><strong>Platforms:</strong> {game.platforms?.map(platform => platform.platform.name).join(', ')}</p>
        </div>
        <div className="mt-5">
      <p><strong>About Game:</strong> {game.description_raw}</p>
      <h3>Additional Content:</h3>
      <p><strong>DLCs:</strong> {game.additions?.length > 0 ? game.additions.map(dlc => dlc.name).join(', ') : 'None'}</p>

      <h3>Screenshots:</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {game.short_screenshots?.map((screenshot, index) => (
          <img key={index} src={screenshot.image} alt={`Screenshot ${index + 1}`} style={{ width: '30%' }} />
        ))}
      </div>
      </div>
      </div>
      

      
    </div>
  );
}

export default GameDetails;
