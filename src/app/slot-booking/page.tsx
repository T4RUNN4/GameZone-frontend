import Button from "@/components/Buttons";
import SectionContainer from "@/components/SectionContainer";

export default function SlotBooking() {
  return (
    <SectionContainer
      title="Slot Booking"
      subtitle="Book your preferred time slot for gaming sessions and ensure a seamless gaming experience."
    >
      <div className="flex mx-auto max-w-5xl items-center justify-center">
        <form className="w-full rounded-box border border-gray-600 p-8">
          <p className="text-center text-2xl font-bold mb-4">Booking Date</p>

          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xl font-bold">Preffered Date</label>
            <input type="date" className="input text-black w-full" />
          </div>

          <p className="text-center text-2xl font-bold mb-4">Booking Time</p>

          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xl font-bold">Start Time</label>
            <input type="time" className="input text-black w-full" />
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xl font-bold">End Time</label>
            <input type="time" className="input text-black w-full" />
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button text="Book Slot" type="primary" task="button" />
            <Button text="Clear" type="secondary" task="button" />
          </div>
        </form>
      </div>
    </SectionContainer>
  );
}
