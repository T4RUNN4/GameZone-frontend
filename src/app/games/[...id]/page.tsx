import SectionContainer from "@/components/SectionContainer";
import Image from "next/image";

export default function GameDetails() {
  const game = {
    id: 1,
    title: "EA SPORTS FC 26",
    category: "Football",
    description:
      "The latest football simulation featuring authentic clubs, leagues, and players.",
    longDescription:
      "EA SPORTS FC 26 delivers the most realistic football experience with over 20,000 licensed players, hundreds of clubs, and official leagues from around the world. Enjoy Career Mode, Ultimate Team, Clubs, and Kick-Off with improved gameplay, smarter AI, and enhanced graphics. Whether you're competing online or building your dream squad, FC 26 offers countless hours of football action.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKxANvsGXXFA-NTnHRAKaXjd38qcfWUBU-05QAYkwcDzFsyAz6uG0S-7w&s=10",
    hourlyRate: 10.0,
  };
  
  return (
    <SectionContainer
      title="Game Details"
      subtitle="Explore the details of the selected game, including description, features, and more."
    >
      <div className="flex flex-col items-center justify-center md:flex-row gap-16">
        <div className="md:w-1/3">
          <Image
            src={game.imageUrl}
            alt={game.title}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center md:w-1/2 mt-4">
          <h4 className="mb-4">
            Category:{" "}
            <span className="text-blue-500 font-semibold text-xl">
              {game.category}
            </span>
          </h4>
          <h2 className="text-6xl font-bold mb-4">{game.title}</h2>
          <p className="text-sm">{game.description}</p>
          <p className="my-12 text-lg text-justify">{game.longDescription}</p>

          <div className="flex flex-col gap-2 text-sm">
            <p>Playing Rent: </p>
            <p>
              <span className="text-4xl font-bold text-blue-500">
                ${game.hourlyRate.toFixed(2)}
              </span>{" "}
              / hour
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
