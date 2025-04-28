import React from 'react'
import Videoplaycard from '../Videoplaycard';

const  MultiplayerGame=()=> {
  return (
    <div>
              <h1 className="text-2xl new-game-title">Random game</h1>
        {/* Horizontal scroll with scrollbar hidden */}
        <div className="flex gap-6 px-4 py-8 overflow-x-auto scrollbar-none new-game-card">
          {games.map((game) => (
            <div
              key={game.id}
              onClick={() => handleClick(game)}
              className="flex-shrink-0"
            >
              <Videoplaycard
                image={game.img}
                video={game.video}
                title={game.title}
              />
            </div>
          ))}
        </div>
    </div>
  )
}

export default MultiplayerGame

export const games = [

    {
      id: '1',
      title: "Snake Game",
      slug: "snake-game", // must match URL
      iframeSrc: "https://pratiktariyacode.github.io/snake/",
      img: "https://tse2.mm.bing.net/th?id=OIP.aZM82NwEYWDfO514wcNBpwHaEK&pid=Api&P=0&h=180",
      video: "/snake.mp4",
    },
    {
      id: '4',
      title: "Ball Clicker Game",
      slug: "Ball-Clicker-Game",
      iframeSrc: "https://pratiktariyacode.github.io/Ball-Clicker-Game/",
      img: "https://wallup.net/wp-content/uploads/2016/01/129751-video_games.jpg",
      video: "/ball.mp4",
    },
    {
      id: '2',
      title: "Tic Tac Toe Game",
      slug: "tic-tac-toe-game",
      iframeSrc: "https://pratiktariyacode.github.io/tictoc/",
      img: "https://tse4.mm.bing.net/th?id=OIP.wc3GK4ZKdVYrePsSt2QH8wHaEK&pid=Api&P=0&h=180",
      video: "/tic.mp4",
    },
    {
      id: '3',
      title: "Car Game",
      slug: "Car-game",
      iframeSrc: "https://pratiktariyacode.github.io/car/",
      img: "https://tse4.mm.bing.net/th?id=OIP.FkCL1JGQDTebV7WQK0tPYAHaEK&pid=Api&P=0&h=180",
      video: "/car.mp4",
    },
    {
      id: '4',
      title: "Ball Clicker Game",
      slug: "Ball-Clicker-Game",
      iframeSrc: "https://pratiktariyacode.github.io/Ball-Clicker-Game/",
      img: "https://tse3.mm.bing.net/th?id=OIP.OkKnCz1FlcTSxoADXdtA2wHaEK&pid=Api&P=0&h=180",
      video: "/ball.mp4",
    },
    {
      id: '1',
      title: "Snake Game",
      slug: "snake-game", // must match URL
      iframeSrc: "https://pratiktariyacode.github.io/snake/",
      img: "https://tse3.mm.bing.net/th?id=OIP.RhblR4fkQxnHZ3xrAPcVwgHaEK&pid=Api&P=0&h=180",
      video: "/snake.mp4",
    },
    {
      id: '2',
      title: "Tic Tac Toe Game",
      slug: "tic-tac-toe-game",
      iframeSrc: "https://pratiktariyacode.github.io/tictoc/",
      img: "https://tse1.mm.bing.net/th?id=OIP.e2F6vHZkwsRteUdNghpN9gHaEK&pid=Api&P=0&h=180",
      video: "/tic.mp4",
    },
    {
      id: '3',
      title: "Car Game",
      slug: "Car-game",
      iframeSrc: "https://pratiktariyacode.github.io/car/",
      img: "https://tse3.mm.bing.net/th?id=OIP.C5wOVS9W2KcK2pmH2J0MzQHaEK&pid=Api&P=0&h=180",
      video: "/car.mp4",
    },
    {
      id: '4',
      title: "Ball Clicker Game",
      slug: "Ball-Clicker-Game",
      iframeSrc: "https://pratiktariyacode.github.io/Ball-Clicker-Game/",
      img: "https://tse4.mm.bing.net/th?id=OIP.Fo9sRg1YXvXNBb5YcssMQAHaDt&pid=Api&P=0&h=180",
      video: "/ball.mp4",
    },
  ];