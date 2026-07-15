"use client";

import GamesCard from "@/components/GamesCard";
import SectionContainer from "@/components/SectionContainer";
import { useEffect, useState } from "react";

interface Game {
  _id: string;
  gameName: string;
  gameCategory: string;
  gameShortDescription: string;
  gameDescription: string;
  gameImageURL: string;
  hourlyRate: number;
}

export default function Games() {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/games`);
      const gameList = await res.json();

      setGames(gameList);
      setLoading(false);
    }

    fetchGames();
  }, [setGames, setLoading])

  if(loading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    )
  }

  return (
    <SectionContainer
      title="Available Games"
      subtitle="Explore the list of games thats you can play in our shop for hourly basis with friends and family"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game) => (
          <GamesCard
            key={game._id}
            id={Number(game._id)}
            title={game.gameName}
            category={game.gameCategory}
            description={game.gameShortDescription}
            imageUrl={game.gameImageURL}
            hourlyRate={Number(game.hourlyRate)}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
