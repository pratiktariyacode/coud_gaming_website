"use client";
import { useRouter } from "next/navigation";
import { games } from "./data/games";
import Videoplaycard from "./components/Videoplaycard";
import Gamecard2d from "./components/game2d/Gamecard2d";
import CrazyGames from "./components/CrazyGames/CrazyGames";
import FeaturedGame from "./components/featured/FeaturedGame";
import MultiplayerGame from "./components/multiplayer/MultiplayerGame";
import Gameall from "./components/gameall/Gameall";
import Gamepc from "./components/gamepc/Gamepc";

export default function HomePage() {
  const router = useRouter();

  const handleClick = (game) => {
    router.push(`/game/${game.slug}`);
  };

  return (
    <div>
      <div className="Gamecard2d">
        <Gamecard2d />
      </div>
      <div className="multiplayer-game-card">
          <MultiplayerGame/>
        </div>
      <div className="Featured-games">
        <h1 className="text-2xl new-game-title">Featured games</h1>

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
      <div className="Random-game">
        <div>
          <CrazyGames/>
        </div>
        <div>
          <FeaturedGame/>
        </div>
        <div>
          <Gameall/>
        </div>
        <div className="Game-pc-space">
          <Gamepc/>
        </div>
      </div>
    </div>
  );
}
