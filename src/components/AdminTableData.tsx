import Button from "./Buttons";

interface TableDataProps {
  name: string;
  phone: string;
  date: string;
  time: string;
}

export default function AdminTableData({
  name,
  phone,
  date,
  time,
}: TableDataProps) {
  return (
    <tr>
      <td className="border border-gray-600">{name}</td>
      <td className="border border-gray-600">{phone}</td>
      <td className="border border-gray-600">{date}</td>
      <td className="border border-gray-600">{time}</td>
      <td className="flex items-center justify-center gap-4 border border-gray-600">
        <Button text="Approve" type="success" task="button" />
        <Button text="Reject" type="error" task="button" />
      </td>
    </tr>
  );
}
