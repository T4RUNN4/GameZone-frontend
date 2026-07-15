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
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<"default" | "low-high" | "high-low">(
    "default",
  );

  const categories = useMemo(() => {
    return ["All", ...new Set(games.map((game) => game.gameCategory))];
  }, [games]);

  const filteredGames = useMemo(() => {
    let result = [...games];

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (game) =>
          game.gameName.toLowerCase().includes(query) ||
          game.gameCategory.toLowerCase().includes(query),
      );
    }

    if (category !== "All") {
      result = result.filter((game) => game.gameCategory === category);
    }

    switch (sort) {
      case "low-high":
        result.sort((a, b) => Number(a.hourlyRate) - Number(b.hourlyRate));
        break;

      case "high-low":
        result.sort((a, b) => Number(b.hourlyRate) - Number(a.hourlyRate));
        break;
    }

    return result;
  }, [games, search, category, sort]);

  return (
    <SectionContainer
      title="Available Games"
      subtitle="Explore the list of games that you can play in our shop."
    >
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          className="input w-full max-w-md text-black"
          placeholder="Search by game name or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className="select text-black"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          <select
            className="select text-black"
            value={sort}
            onChange={(e) =>
              setSort(e.target.value as "default" | "low-high" | "high-low")
            }
          >
            <option value="default">Default</option>
            <option value="low-high">Rent: Low → High</option>
            <option value="high-low">Rent: High → Low</option>
          </select>
        </div>
      </div>

      {filteredGames.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-xl font-semibold">No games found.</p>
        </div>
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
