'use client';
import { useState } from 'react';

export default function CrazyVideo({ image, video, title }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-[250px] h-[300px] rounded overflow-hidden shadow-lg relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <img
          src={image}
          alt="Game Thumbnail"
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          src={video}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover game-video"
        />
      )}
      <div className="game-title absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 text-white py-1 text-sm">
        {title}
      </div>
    </div>
  );
}
