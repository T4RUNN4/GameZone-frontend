import GamesClient from "@/components/GamesClient";
import { fetchGames } from "@/lib/fetchGames";

export default async function Games() {
  const games = await fetchGames();

  return <GamesClient games={games} />;
}
