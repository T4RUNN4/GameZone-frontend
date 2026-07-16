import SectionContainer from "@/components/SectionContainer";
import { fetchGame } from "@/lib/fetchGames";
import Image from "next/image";

interface GameDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function GameDetails({ params }: GameDetailsProps) {
  const { id } = await params;
  const game = await fetchGame(id);

  const imageSize: number = 500;

  return (
    <SectionContainer
      title="Game Details"
      subtitle="Explore the details of the selected game, including description, features, and more."
    >
      <div className="md:flex items-center justify-center md:flex-row gap-16">
        <div className="md:w-1/3">
          <Image
            src={game.gameImageURL}
            alt={game.gameName}
            width={imageSize}
            height={imageSize}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center md:w-1/2 mt-4">
          <h4 className="mb-4">
            Category:{" "}
            <span className="text-blue-500 font-semibold text-xl">
              {game.gameCategory}
            </span>
          </h4>
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">{game.gameName}</h2>
          <p className="text-sm">{game.gameShortDescription}</p>
          <p className="my-12 text-lg text-justify">{game.gameDescription}</p>

          <div className="flex flex-col gap-2 text-sm">
            <p>Playing Rent: </p>
            <p>
              <span className="text-4xl font-bold text-blue-500">
                {game.hourlyRate}
              </span>{" "}
              / hour
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
