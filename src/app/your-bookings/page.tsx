"use client";

import Button from "@/components/Buttons";
import SectionContainer from "@/components/SectionContainer";
import UserTableData from "@/components/UserTableData";
import { authClient } from "@/lib/auth-client";
import { fetchSlots } from "@/lib/fetchSlots";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Slot {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  status: string;
}

export default function YourBookings() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();
  const [slots, setSlots] = useState<Slot[]>([]);

  useEffect(() => {
    if (!user) {
      return;
    }

    const fetchSlot = async () => {
      const slotDetails = await fetchSlots(user?.id);
      setSlots(slotDetails);
    };

    fetchSlot();
  }, [user, router]);

  if(slots.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 font-bold text-xl min-h-screen">
        You didn't booked any slot yet. 
        <Button text="Slot Booking" type="primary" task="hyperlink" href="/slot-booking" />
      </div>
    )
  }

  return (
    <SectionContainer
      title="Your Bookings"
      subtitle="Curated lst of slots that you have booked"
    >
      <table className="table w-full">
        <thead className="bg-blue-500 text-lg font-bold text-white text-center">
          <tr>
            <th>Booking Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {slots.map((slot) => (
            <UserTableData
              date={slot.date}
              startTime={slot.startTime}
              endTime={slot.endTime}
              status={slot.status}
            />
          ))}
        </tbody>
      </table>
    </SectionContainer>
  );
}
