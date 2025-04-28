'use client';

import Image from "next/image";
import Gamecard2dvideo from "./Gmecard2dvideo";// assuming same folder or adjust path

const Gamecard2d = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold game-2d-title mb-4">Best game</h1>

      <div className="flex scrollbar-none overflow-x-auto gap-4 px-2 gamecard-2d">
        {/* Card 1 - video on hover */}
        <div className="flex-shrink-0">
          <Gamecard2dvideo 
            image="https://wallpaperaccess.com/full/8468587.jpg"
            video="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" // your game video link here
            title="Epic Adventure"
          />
        </div>

        {/* Card 2 - only image */}
        <div className="flex-shrink-0 w-[550px] h-[330px] rounded-lg overflow-hidden bg-gray-200">
          <Image
            src="https://wallpaperaccess.com/full/4649029.png"
            width={550}
            height={330}
            alt="game image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 3 - video on hover */}
        <div className="flex-shrink-0">
          <Gamecard2dvideo 
            image="https://wallpaperaccess.com/full/2792767.jpg"
            video="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" 
            title="Mystery Island"
          />
        </div>

        {/* Add more cards similarly */}
        {/* Card 1 - video on hover */}
        <div className="flex-shrink-0">
          <Gamecard2dvideo 
            image="https://wallpaperaccess.com/full/8468587.jpg"
            video="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" // your game video link here
            title="Epic Adventure"
          />
        </div>

        {/* Card 2 - only image */}
        <div className="flex-shrink-0 w-[550px] h-[330px] rounded-lg overflow-hidden bg-gray-200">
          <Image
            src="https://wallpaperaccess.com/full/4649029.png"
            width={550}
            height={330}
            alt="game image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 3 - video on hover */}
        <div className="flex-shrink-0">
          <Gamecard2dvideo 
            image="https://wallpaperaccess.com/full/2792767.jpg"
            video="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" 
            title="Mystery Island"
          />
        </div>

        {/* Add more cards similarly */}
        {/* Card 1 - video on hover */}
        <div className="flex-shrink-0">
          <Gamecard2dvideo 
            image="https://wallpaperaccess.com/full/8468587.jpg"
            video="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" // your game video link here
            title="Epic Adventure"
          />
        </div>

        {/* Card 2 - only image */}
        <div className="flex-shrink-0 w-[550px] h-[330px] rounded-lg overflow-hidden bg-gray-200">
          <Image
            src="https://wallpaperaccess.com/full/4649029.png"
            width={550}
            height={330}
            alt="game image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 3 - video on hover */}
        <div className="flex-shrink-0">
          <Gamecard2dvideo 
            image="https://wallpaperaccess.com/full/2792767.jpg"
            video="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" 
            title="Mystery Island"
          />
        </div>

        {/* Add more cards similarly */}
      </div>
    </div>
  );
};

export default Gamecard2d;
