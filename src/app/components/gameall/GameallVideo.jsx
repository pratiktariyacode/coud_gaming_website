'use client';
import { useState } from 'react';

export default function Gameallvideo({ image, video, title }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-64 h-40 rounded overflow-hidden shadow-lg relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <img
          src={image}
          alt="Game Thumbnail"
          className="w-full h-full object-cover Game-all-image"
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
      <div className="game-title absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 text-white py-1 text-sm Game-all-title">
        {title}
      </div>
    </div>
  );
}
