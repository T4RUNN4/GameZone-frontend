// "use client";

import GamesCard from "@/components/GamesCard";
import SectionContainer from "@/components/SectionContainer";
import { fetchGames } from "@/lib/fetchGames";
// import { useEffect, useState } from "react";

interface Game {
  _id: string;
  gameName: string;
  gameCategory: string;
  gameShortDescription: string;
  gameDescription: string;
  gameImageURL: string;
  hourlyRate: number;
}

export default async function Games() {
  const games = await fetchGames();

  if(games.length === 0) {
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
            id={game._id}
            title={game.gameName}
            category={game.gameCategory}
            description={game.gameShortDescription}
            imageUrl={game.gameImageURL}
            hourlyRate={game.hourlyRate}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
