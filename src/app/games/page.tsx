import GamesCard from "@/components/GamesCard";
import SectionContainer from "@/components/SectionContainer";

export default function Games() {
    return (
      <SectionContainer title="Available Games" subtitle="Explore the list of games thats available in our shop so that you can  ensure that your game is available for you to play." >

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <GamesCard
            title="EA FC 26"
            category="Football"
            description="EA SPORTS FC 26 is a premier football simulation video game featuring over 20,000 authentic players, 750+ clubs, and 120+ stadiums."
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKxANvsGXXFA-NTnHRAKaXjd38qcfWUBU-05QAYkwcDzFsyAz6uG0S-7w&s=10"
            hourlyRate={10.0}
          />
          <GamesCard
            title="WWE 2k26"
            category="Wrestling"
            description="WWE 2K26 is a professional wrestling sports game developed by Visual Concepts and published by 2K"
            imageUrl="https://store-images.s-microsoft.com/image/apps.49935.14245693243511042.09f19d31-3dab-4c77-8362-732a985c0400.e7a61b76-e9e7-4b84-a7e5-033365ed3488"
            hourlyRate={15.0}
          />
          <GamesCard
            title="Asphalt 8"
            category="Racing"
            description="Asphalt 8 is a popular racing game features over 300 licensed cars and motorcycles, and 75+ global tracks with dramatic gravity-defying stunts."
            imageUrl="https://m.media-amazon.com/images/M/MV5BYjBmYWU2NzktOTdmYy00MWFkLTkyNmItM2M0NGNkMmY0OGYwXkEyXkFqcGc@._V1_.jpg"
            hourlyRate={20.0}
          />
          <GamesCard
            title="Cricket 26"
            category="Cricket"
            description="Cricket 26 - The Official Game of the Ashes is a cricket simulation game by Big Ant Studios and Nacon"
            imageUrl="https://store-images.s-microsoft.com/image/apps.62783.14013085416782408.0c71a501-7c8e-46be-8973-1b2bba50d4d8.a117c9e0-ccac-4d22-9fc8-789b79efcfc9"
            hourlyRate={25.0}
          />
        </div>
      </SectionContainer>
    );
}