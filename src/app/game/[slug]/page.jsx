'use client';

import { useParams } from 'next/navigation';
import { games } from '../../data/games';

export default function GamePage() {
  const { slug } = useParams();
  const game = games.find((g) => g.slug === slug);

  if (!game) {
    return <p className="text-center mt-20 text-xl">🚫 Game not found</p>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">{game.title}</h1>
      <iframe
        src={game.iframeSrc}
        width="100%"
        height="700"
        className="max-w-[500px] w-full rounded-lg shadow-lg game-iframe"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}