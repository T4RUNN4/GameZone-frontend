import AdminTableData from "@/components/AdminTableData";
import SectionContainer from "@/components/SectionContainer";

export default function ManageBookings() {
  return (
    <SectionContainer
      title="Manage Bookings"
      subtitle="List of slot booking request by users"
    >
      <table className="table w-full">
        <thead className="bg-blue-500 text-lg font-bold text-white text-center">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <AdminTableData
            name="John Doe"
            phone="1234567890"
            date="15/07/2026"
            time="05:00 - 06:00"
          />
          <AdminTableData
            name="Jane Smith"
            phone="9876543210"
            date="16/07/2026"
            time="06:00 - 07:00"
          />
          <AdminTableData
            name="Alice Johnson"
            phone="5555555555"
            date="17/07/2026"
            time="07:00 - 08:00"
          />
        </tbody>
      </table>
    </SectionContainer>
  );
}
