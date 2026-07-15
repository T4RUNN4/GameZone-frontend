import Button from "./Buttons";

interface TableDataProps {
  id: string;
  name: string;
  date: string;
  time: string;
}

export default function AdminTableData(props: TableDataProps) {
  return (
    <tr>
      <td className="border border-gray-600">{props.id}</td>
      <td className="border border-gray-600">{props.name}</td>
      <td className="border border-gray-600">{props.date}</td>
      <td className="border border-gray-600">{props.time}</td>
      <td className="flex items-center justify-center gap-4 border border-gray-600">
        <Button text="Approve" type="success" task="button" />
        <Button text="Reject" type="error" task="button" />
      </td>
    </tr>
  );
}
