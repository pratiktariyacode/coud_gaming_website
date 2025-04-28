import React from "react";
import Image from "next/image";
import CrazyVideo from "./CrazyVideo";

const CrazyGames = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">CrazyGames Originals</h1>
      <div>
        <div className="flex gap-6 px-4 py-8 overflow-x-auto scrollbar-none new-game-card">
          {games.map((game) => (
            <div
              key={game.id}
              onClick={() => handleClick(game)}
              className="flex-shrink-0"
            >
              <CrazyVideo
                image={game.img}
                video={game.video}
                title={game.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrazyGames;


export const games = [
    {
      id: '1',
      title: "Snake Game",
      slug: "snake-game", // must match URL
      iframeSrc: "https://pratiktariyacode.github.io/snake/",
      img: "https://wallpaperaccess.com/full/16169101.png",
      video: "/snake.mp4",
    },
    {
      id: '2',
      title: "Tic Tac Toe Game",
      slug: "tic-tac-toe-game",
      iframeSrc: "https://pratiktariyacode.github.io/tictoc/",
      img: "https://wallpaperaccess.com/full/1106094.jpg",
      video: "/tic.mp4",
    },
    {
      id: '4',
      title: "Ball Clicker Game",
      slug: "Ball-Clicker-Game",
      iframeSrc: "https://pratiktariyacode.github.io/Ball-Clicker-Game/",
      img: "https://wallpaperaccess.com/full/9371157.jpg",
      video: "/ball.mp4",
    },
    {
      id: '1',
      title: "Snake Game",
      slug: "snake-game", // must match URL
      iframeSrc: "https://pratiktariyacode.github.io/snake/",
      img: "https://wallpaperaccess.com/thumb/1894230.png",
      video: "/snake.mp4",
    },
    {
      id: '2',
      title: "Tic Tac Toe Game",
      slug: "tic-tac-toe-game",
      iframeSrc: "https://pratiktariyacode.github.io/tictoc/",
      img: "https://wallpaperaccess.com/full/13655150.jpg",
      video: "/tic.mp4",
    },
    {
      id: '3',
      title: "Car Game",
      slug: "Car-game",
      iframeSrc: "https://pratiktariyacode.github.io/car/",
      img: "https://tse3.mm.bing.net/th?id=OIP.9myMryQWIN-9-JJkKKlV8wHaEK&pid=Api&P=0&h=180",
      video: "/car.mp4",
    },
    {
      id: '4',
      title: "Ball Clicker Game",
      slug: "Ball-Clicker-Game",
      iframeSrc: "https://pratiktariyacode.github.io/Ball-Clicker-Game/",
      img: "https://wallpaperaccess.com/full/10483065.png",
      video: "/ball.mp4",
    },
  ];