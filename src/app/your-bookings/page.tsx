import SectionContainer from "@/components/SectionContainer";
import TableData from "@/components/TableData";

export default function YourBookings() {
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
            <TableData date="15/07/2026" startTime="05:00" endTime="06:00" status="Rejected" />
            <TableData date="15/07/2026" startTime="05:00" endTime="06:00" status="Confirmed" />
            <TableData date="15/07/2026" startTime="05:00" endTime="06:00" status="Pending" />
          </tbody>
        </table>
      </SectionContainer>
    );
}