import Button from "@/components/Buttons";
import SectionContainer from "@/components/SectionContainer";

export default function AddGames() {
  return (
    <SectionContainer
      title="Add Games"
      subtitle="Add new games to the collection "
    >
      <div className="flex mx-auto max-w-5xl items-center justify-center">
        <form className="w-full rounded-box border border-gray-600 p-8">
            
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xl font-bold">Game Name</label>
            <input
              type="text"
              className="input text-black w-full"
              placeholder="WWE 2k26"
            />
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xl font-bold">Game Description</label>
            <input
              type="text"
              className="input text-black w-full"
              placeholder="Enter game description"
            />
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xl font-bold">Game Image URL</label>
            <input
              type="text"
              className="input text-black w-full"
              placeholder="Enter game image URL"
            />
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xl font-bold">Hourly Rate</label>
            <input
              type="number"
              className="input text-black w-full"
              placeholder="Enter hourly rate"
            />
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button text="Add Game" type="primary" task="button" />
            <Button text="Clear" type="secondary" task="button" />
          </div>
        </form>
      </div>
    </SectionContainer>
  );
}
