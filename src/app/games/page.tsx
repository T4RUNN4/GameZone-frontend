import GamesCard from "@/components/GamesCard";
import SectionContainer from "@/components/SectionContainer";

export default function Games() {
  const games = [
    {
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
    },
    {
      id: 2,
      title: "WWE 2K26",
      category: "Wrestling",
      description:
        "Step into the ring with your favorite WWE Superstars and Legends.",
      longDescription:
        "WWE 2K26 brings the excitement of professional wrestling with an expanded roster, realistic animations, new match types, and immersive game modes. Create your own superstar, relive iconic rivalries, compete online, or dominate in MyGM and MyRise. Enhanced graphics and smoother gameplay make every match feel like a live WWE event.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4f/WWE_2K26_standard_cover.jpeg",
      hourlyRate: 15.0,
    },
    {
      id: 3,
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
    {
      id: 4,
      title: "God of War",
      category: "Adventure",
      description:
        "Join Kratos and Atreus on an epic journey through Norse mythology.",
      longDescription:
        "God of War Ragnarök continues the critically acclaimed story of Kratos and Atreus as they face powerful gods and mythical creatures. Experience cinematic storytelling, intense combat, breathtaking visuals, and unforgettable boss battles while exploring the Nine Realms.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg",
      hourlyRate: 18.0,
    },
  ];

  return (
    <SectionContainer
      title="Available Games"
      subtitle="Explore the list of games thats you can play in our shop for hourly basis with friends and family"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
