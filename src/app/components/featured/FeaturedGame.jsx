import React from 'react'
import Videoplaycard from '../Videoplaycard';

const FeaturedGame=() =>{
  return (
    <div>
              <div className="Featured-games">
        <h1 className="text-2xl Featured-game-title">Featured games</h1>

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
    </div>
  )
}

export default FeaturedGame


export const games = [
    {
      id: '1',
      title: "Snake Game",
      slug: "snake-game", // must match URL
      iframeSrc: "https://pratiktariyacode.github.io/snake/",
      img: "https://tse1.mm.bing.net/th?id=OIP.biexfwP3ZDk5S__JmG__YQHaEK&pid=Api&P=0&h=180",
      video: "/snake.mp4",
    },
    {
      id: '2',
      title: "Tic Tac Toe Game",
      slug: "tic-tac-toe-game",
      iframeSrc: "https://pratiktariyacode.github.io/tictoc/",
      img: "https://tse3.mm.bing.net/th?id=OIP.0w-zEod18USipbTD4NY7PAHaEK&pid=Api&P=0&h=180",
      video: "/tic.mp4",
    },
    {
      id: '4',
      title: "Ball Clicker Game",
      slug: "Ball-Clicker-Game",
      iframeSrc: "https://pratiktariyacode.github.io/Ball-Clicker-Game/",
      img: "https://tse3.mm.bing.net/th?id=OIP.iZvgUK8ci-sxGxjzM8K-jwHaEK&pid=Api&P=0&h=180",
      video: "/ball.mp4",
    },
    {
      id: '1',
      title: "Snake Game",
      slug: "snake-game", // must match URL
      iframeSrc: "https://pratiktariyacode.github.io/snake/",
      img: "https://tse3.mm.bing.net/th?id=OIP.useLj2njxS3E9hPULhnuAAHaEK&pid=Api&P=0&h=180",
      video: "/snake.mp4",
    },
    {
      id: '2',
      title: "Tic Tac Toe Game",
      slug: "tic-tac-toe-game",
      iframeSrc: "https://pratiktariyacode.github.io/tictoc/",
      img: "https://tse1.mm.bing.net/th?id=OIP.HHuyBF5Fbt6arjwS9QadIgHaEK&pid=Api&P=0&h=180",
      video: "/tic.mp4",
    },
    {
      id: '3',
      title: "Car Game",
      slug: "Car-game",
      iframeSrc: "https://pratiktariyacode.github.io/car/",
      img: "https://tse3.mm.bing.net/th?id=OIP.vlE4i5AzlqAzFMdZ16iUDwHaEK&pid=Api&P=0&h=180",
      video: "/car.mp4",
    },
    {
      id: '4',
      title: "Ball Clicker Game",
      slug: "Ball-Clicker-Game",
      iframeSrc: "https://pratiktariyacode.github.io/Ball-Clicker-Game/",
      img: "https://tse4.mm.bing.net/th?id=OIP.LXozs6cxla3CC_li13wPWwHaEK&pid=Api&P=0&h=180",
      video: "/ball.mp4",
    },
  ];