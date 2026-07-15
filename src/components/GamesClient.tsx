"use client";

import { useMemo, useState } from "react";
import GamesCard from "./GamesCard";
import SectionContainer from "./SectionContainer";
import { Game } from "@/lib/fetchGames";

interface Props {
  games: Game[];
}

export default function GamesClient({ games }: Props) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<
    "default" | "low-high" | "high-low"
  >("default");

  const filteredGames = useMemo(() => {
    let result = games.filter((game) =>
      game.gameName.toLowerCase().includes(search.toLowerCase()) ||
      game.gameCategory.toLowerCase().includes(search.toLowerCase())
    );

    switch (sort) {
      case "low-high":
        result = [...result].sort(
          (a, b) => Number(a.hourlyRate) - Number(b.hourlyRate)
        );
        break;

      case "high-low":
        result = [...result].sort(
          (a, b) => Number(b.hourlyRate) - Number(a.hourlyRate)
        );
        break;
    }

    return result;
  }, [games, search, sort]);

  return (
    <SectionContainer
      title="Available Games"
      subtitle="Explore the list of games that you can play in our shop."
    >
      <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <input
          type="text"
          className="input w-full max-w-md text-black"
          placeholder="Search by name or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select text-black"
          value={sort}
          onChange={(e) =>
            setSort(
              e.target.value as "default" | "low-high" | "high-low"
            )
          }
        >
          <option value="default">Default</option>
          <option value="low-high">Rent: Low → High</option>
          <option value="high-low">Rent: High → Low</option>
        </select>
      </div>

      {filteredGames.length === 0 ? (
        <p className="text-center text-lg">
          No games found.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredGames.map((game) => (
            <GamesCard
              key={game._id}
              id={game._id}
              title={game.gameName}
              category={game.gameCategory}
              description={game.gameShortDescription}
              imageUrl={game.gameImageURL}
              hourlyRate={Number(game.hourlyRate)}
            />
          ))}
        </div>
      )}
    </SectionContainer>
  );
}