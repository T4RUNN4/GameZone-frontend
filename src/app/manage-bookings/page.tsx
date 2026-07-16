import AdminTableData from "@/components/AdminTableData";
import SectionContainer from "@/components/SectionContainer";
import { fetchSlots } from "@/lib/fetchSlots";
import { format, parse } from "date-fns";

export default async function ManageBookings() {
  const slots = await fetchSlots();

  return (
    <SectionContainer
      title="Manage Bookings"
      subtitle="List of slot booking request by users"
    >
      <table className="table w-full">
        <thead className="bg-blue-500 text-lg font-bold text-white text-center">
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {slots.map((slot) => (
            <AdminTableData
              key={slot._id}
              id={slot._id}
              name={slot.userName}
              date={format(slot.date, "PPP")}
              time={`${format(parse(slot.startTime, "HH:mm", new Date()), "h:mm a")} - ${format(parse(slot.endTime, "HH:mm", new Date()), "h:mm a")}`}
              status={slot.status}
            />
          ))}
        </tbody>
      </table>
    </SectionContainer>
  );
}
