import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function TopRatedThisYear() {
    const [games, setGames] = useState([]);
    const apiUrl = "https://api.rawg.io/api/games?key=914505b770ea4da29ba05daa4e0899cf&dates=2024-01-01,2024-12-31&ordering=-rating";
    const navigate = useNavigate();

     const handleCardClick = (gameId) => {
        navigate(`/game/${gameId}`);
    };
    
    useEffect(() => {
        const fetchGameData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setGames(response.data.results);
                console.log(response.data.results); // Check the fetched data
            } catch (error) {
                console.error("Error fetching game data:", error);
            }
        };

        fetchGameData();
    }, []);

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
            onClick={onClick}
          />
        );
    }
      
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
            onClick={onClick}
          />
        );
    }
      
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

   

    return (
        <div className="container mx-auto mt-10 px-4">
            <h1 className="text-3xl font-bold text-center mb-6 dark:text-white">Top Rated This Year</h1>
            {games.length > 0 ? (
                <Slider {...settings}>
                    {games.map((game) => (
                        <Card 
                            key={game.id} // Add a unique key here
                            style={{ width: "10rem" }} 
                            className="dark:bg-gray-600" 
                            onClick={() => handleCardClick(game.id)}
                        >
                            <Card.Img variant="top" src={game.background_image} alt="no image :("/>
                            <Card.Body>
                                <Card.Title className="dark:text-white">{game.name}</Card.Title>
                                <Card.Text>
                                    {game.rating}/{game.rating_top} <i className="bi bi-star"></i>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Slider>
            ) : (
                <p className="text-center">Loading games...</p>
            )}
        </div>
    );
}

export default TopRatedThisYear;
