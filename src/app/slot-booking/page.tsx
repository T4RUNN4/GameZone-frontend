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
            
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xl font-bold">Full Name</label>
            <input
              type="text"
              className="input text-black w-full"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xl font-bold">Contact Number</label>
            <input
              type="text"
              className="input text-black w-full"
              placeholder="+880-1817-320099"
            />
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xl font-bold">Booking Date</label>
            <input type="date" className="input text-black w-full" />
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <label className="text-xl font-bold">Booking Time</label>
            <input type="time" className="input text-black w-full" />
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button text="Book Slot" type="primary" />
            <Button text="Clear" type="secondary" />
          </div>
        </form>
      </div>
    </SectionContainer>
  );
}
