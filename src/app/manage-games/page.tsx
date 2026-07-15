import Button from "@/components/Buttons";
import ManageGamesCard from "@/components/ManageGameCard";
import SectionContainer from "@/components/SectionContainer";
import { fetchGames } from "@/lib/fetchGames";

export default async function ManageGames() {
  const games = await fetchGames();

  if (games.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }

  return (
    <SectionContainer
      title="Manage Games"
      subtitle="Edit or delete the games based on the availability of the game in the shops"
    >
      <div className="flex justify-end mb-4">
        <Button text="Add Game" type="primary" task="hyperlink" href="/add-games" />
      </div>
      <div className="flex flex-col gap-4">
        {games.map((game) => (
          <ManageGamesCard
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
