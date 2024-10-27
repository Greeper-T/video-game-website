import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function VideogameSlider() {
    const [games, setGames] = useState([]);
    const apiUrl = "https://api.rawg.io/api/games?key=914505b770ea4da29ba05daa4e0899cf";

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

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
        
    };

    return (
        <div className="container mx-auto mt-10 px-4">
            <h1 className="text-3xl font-bold text-center mb-6">Popular Games</h1>
            {games.length > 0 ? (
                <Slider {...settings}>
                    {games.map((game) => (
                        <div key={game.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img 
                                src={game.background_image} 
                                alt={`${game.name} cover`} 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h5 className="text-xl font-semibold mb-2">{game.name}</h5>
                                <p className="text-gray-600">Released: {game.released}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <p className="text-center">Loading games...</p>
            )}
        </div>
    );
}

export default VideogameSlider;