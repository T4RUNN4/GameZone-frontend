import GamesCard from "./GamesCard"
import SectionContainer from "./SectionContainer"

export default function FeaturedGames() {
    const games = [
      {
        id: "1a",
        title: "EA SPORTS FC 26",
        category: "Football",
        description:
          "The latest football simulation featuring authentic clubs, leagues, and players.",
        longDescription:
          "EA SPORTS FC 26 delivers the most realistic football experience with over 20,000 licensed players, hundreds of clubs, and official leagues from around the world. Enjoy Career Mode, Ultimate Team, Clubs, and Kick-Off with improved gameplay, smarter AI, and enhanced graphics. Whether you're competing online or building your dream squad, FC 26 offers countless hours of football action.",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKxANvsGXXFA-NTnHRAKaXjd38qcfWUBU-05QAYkwcDzFsyAz6uG0S-7w&s=10",
        hourlyRate: 10.0,
      },
      {
        id: "3c",
        title: "GTA V",
        category: "Action",
        description:
          "Explore Los Santos in one of the world's most popular open-world games.",
        longDescription:
          "Grand Theft Auto V combines an engaging single-player story with the massive online world of GTA Online. Complete missions, race cars, own businesses, pull off heists, or simply explore the sprawling city of Los Santos. With endless multiplayer activities and regular content updates, it's one of the most replayable games on PlayStation.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
        hourlyRate: 12.0,
      },
    ];

    return (
      <SectionContainer
        title="Featured Game"
        subtitle="Most played games of our shop"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {games.map((game) => (
            <GamesCard
              key={game.id}
              id={game.id}
              title={game.title}
              category={game.category}
              description={game.description}
              imageUrl={game.imageUrl}
              hourlyRate={game.hourlyRate}
            />
          ))}
        </div>
      </SectionContainer>
    );
}