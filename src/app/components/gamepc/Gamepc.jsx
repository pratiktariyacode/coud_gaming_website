"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const gameImages = [
  // Top Trending Games
  {
    img: "https://wallpaperaccess.com/thumb/1096896.jpg",
    title: "Cyberpunk 2077",
    desc: "Explore Night City in a futuristic RPG adventure.",
    link:"https://pratiktariyacode.github.io/game2/"
  },
  {
    img: "https://tse2.mm.bing.net/th?id=OIP.Gcy15f59w8YIHaAbeUauSwHaEK&pid=Api&P=0&h=180",
    title: "GTA V",
    desc: "Live the ultimate crime saga in Los Santos.",
  },
  {
    img: "https://wallpaperaccess.com/full/2792767.jpg",
    title: "Diablo IV",
    desc: "Hack and slash your way through the underworld.",
  },
  {
    img: "https://wallpaperaccess.com/full/9372228.jpg",
    title: "The Legend of Zelda: Tears of the Kingdom",
    desc: "Embark on an epic open-world adventure.",
  },
  {
    img: "https://wallpaperaccess.com/full/4649029.png",
    title: "Hogwarts Legacy",
    desc: "Live your wizarding dream in an open-world RPG.",
  },
  {
    img: "https://wallpaperaccess.com/thumb/9968304.png",
    title: "Starfield",
    desc: "Explore the galaxy in this epic space RPG.",
  },
  {
    img: "https://wallpaperaccess.com/full/9202712.jpg",
    title: "Assassin’s Creed Mirage",
    desc: "Return to classic stealth gameplay in ancient Baghdad.",
  },
  {
    img: "https://tse2.mm.bing.net/th?id=OIP.QHUpurMuhTxNr9LNoBPiwwHaEK&pid=Api&P=0&h=180",
    title: "Baldur’s Gate 3",
    desc: "A deep, story-driven RPG with turn-based combat.",
  },
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.ezr7DUjF7n2u43NKk4K7ogHaDt&pid=Api&P=0&h=180",
    title: "Alan Wake II",
    desc: "Psychological horror thriller with a gripping narrative.",
  },
  {
    img: "https://wallpaperaccess.com/full/8468587.jpg",
    title: "Marvel’s Spider-Man 2",
    desc: "Swing through NYC with Peter Parker and Miles Morales.",
  },
  {
    img: "https://wallpaperaccess.com/full/4513233.jpg",
    title: "S.T.A.L.K.E.R. 2",
    desc: "Survive the horrors of Chernobyl’s exclusion zone.",
  },
  {
    img: "https://wallpaperaccess.com/full/11832660.jpg",
    title: "Palworld",
    desc: "Pokémon meets survival crafting in an open-world setting.",
  },
  {
    img: "https://wallpaperaccess.com/full/16169101.png",
    title: "Silent Hill 2 Remake",
    desc: "A terrifying psychological horror experience.",
  },
  {
    img: "https://wallpaperaccess.com/full/1106094.jpg",
    title: "Mortal Kombat 1",
    desc: "Reboot of the legendary fighting game series.",
  },
  {
    img: "https://wallpaperaccess.com/full/9371157.jpg",
    title: "Lies of P",
    desc: "Dark, Souls-like RPG based on the tale of Pinocchio.",
  },
  {
    img: "https://wallpaperaccess.com/thumb/1894230.png",
    title: "Persona 5 Royal",
    desc: "An enhanced version of the classic turn-based RPG.",
  },
  {
    img: "https://wallpaperaccess.com/full/13655150.jpg",
    title: "Pikmin 4",
    desc: "Explore and strategize in a tiny, colorful world.",
  },
  {
    img: "https://tse3.mm.bing.net/th?id=OIP.9myMryQWIN-9-JJkKKlV8wHaEK&pid=Api&P=0&h=180",
    title: "Cities: Skylines II",
    desc: "Build and manage your dream city.",
  },
  {
    img: "https://wallpaperaccess.com/full/10483065.png",
    title: "Armored Core VI",
    desc: "Mecha combat at its finest from the creators of Dark Souls.",
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.sOAhN4f1JkM29QflYE_CFgHaEK&pid=Api&P=0&h=180",
    title: "Granblue Fantasy: Relink",
    desc: "A gorgeous anime-inspired action RPG.",
  },
  {
    img: "https://wallpaperaccess.com/full/13285792.jpg",
    title: "Dragon’s Dogma 2",
    desc: "An open-world RPG with deep combat mechanics.",
  },
  {
    img: "https://tse2.mm.bing.net/th?id=OIP.TkOTo0ZOxOscDXXPmEvb2QHaEK&pid=Api&P=0&h=180",
    title: "Like a Dragon: Infinite Wealth",
    desc: "Yakuza's next big RPG adventure.",
  },
  {
    img: "https://wallpaperaccess.com/full/12585408.jpg",
    title: "Helldivers 2",
    desc: "Co-op sci-fi shooter with strategic elements.",
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.2PLA17Q1RrmqtkvZ49xv_wHaEK&pid=Api&P=0&h=180",
    title: "Metroid Prime Remastered",
    desc: "A fresh take on the classic sci-fi exploration game.",
  },
  {
    img: "https://wallpaperaccess.com/full/14336837.jpg",
    title: "Xenoblade Chronicles 3",
    desc: "An expansive JRPG with deep storytelling.",
  },
  {
    img: "https://tse2.mm.bing.net/th?id=OIP.y-gUZku6IWZpjPEBPAcv4wHaEK&pid=Api&P=0&h=180",
    title: "Octopath Traveler II",
    desc: "A beautiful pixel-art RPG with multiple protagonists.",
  },
  {
    img: "https://wallpaperaccess.com/full/8652685.jpg",
    title: "Sonic Frontiers",
    desc: "Sonic’s first open-world adventure.",
  },
  {
    img: "https://wallpaperaccess.com/full/9308183.jpg",
    title: "Street Fighter 6",
    desc: "The next evolution in competitive fighting games.",
  },
  {
    img: "https://wallpaperaccess.com/full/565332.jpg",
    title: "Lords of the Fallen",
    desc: "A dark, souls-like RPG with brutal combat.",
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.gd8QLmwdt69GWzkw7ZdUqgHaEK&pid=Api&P=0&h=180",
    title: "Warhammer 40,000: Darktide",
    desc: "Intense co-op action in the Warhammer universe.",
  },
  {
    img: "https://wallpaperaccess.com/full/16334103.jpg",
    title: "Payday 3",
    desc: "Plan and execute high-stakes heists.",
  },
  {
    img: "https://wallpaperaccess.com/full/14763178.jpg",
    title: "Avatar: Frontiers of Pandora",
    desc: "Explore the breathtaking world of Pandora.",
  },
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.yOOOPfUHsN7GAOHjaPVBdAHaEK&pid=Api&P=0&h=180",
    title: "Senua’s Saga: Hellblade II",
    desc: "A cinematic journey through Viking mythology.",
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.VLRbS_thzNyyyO8Sn-LrVwHaEK&pid=Api&P=0&h=180",
    title: "Hades II",
    desc: "A sequel to the roguelike dungeon-crawler hit.",
  },
  {
    img: "https://wallpaperaccess.com/full/2758996.jpg",
    title: "Dying Light 2",
    desc: "Survive in a parkour-filled zombie apocalypse.",
  },
  {
    img: "https://tse2.mm.bing.net/th?id=OIP.hPfbPBVlAd6B2j13eNFRwQHaEK&pid=Api&P=0&h=180",
    title: "No Man’s Sky",
    desc: "Endless space exploration and adventure.",
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.9sBkqsNW6Wr4OCV77XP5DQHaEK&pid=Api&P=0&h=180",
    title: "Ghostrunner 2",
    desc: "Cyberpunk parkour action at high speed.",
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.brlvKYpnlY8aexEMRMH-3wHaEK&pid=Api&P=0&h=180",
    title: "Fire Emblem Engage",
    desc: "A turn-based strategy RPG with engaging characters.",
  },
  {
    img: "https://wallpaperaccess.com/thumb/8642820.jpg",
    title: "The Callisto Protocol",
    desc: "A spiritual successor to Dead Space.",
  },
  {
    img: "https://wallpaperaccess.com/full/13159857.jpg",
    title: "Prince of Persia: The Lost Crown",
    desc: "A return to 2D platforming roots.",
  },
];





const Gamepc = () => {
  return (
    <>
    <Link href={"https://pratiktariyacode.github.io/game2/"}><div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 mb-2.5">

{/* Game Cards Section */}
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
  {gameImages.map((game, index) => (
    <motion.div
      key={index}
      className="bg-gray-900 p-4 rounded-xl shadow-lg text-center"
      whileHover={{ scale: 1.05 }}
    >
     <img
        src={game.img}
        alt={game.title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold">{game.title}</h3>
      <p className="text-gray-400">{game.desc}</p>
    </motion.div>
  ))}
</div>
</div></Link>
    </>
  );
};

export default Gamepc;

//https://pratiktariyacode.github.io/game2/