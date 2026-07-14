interface TableDataProps {
  date: string;
  startTime: string;
  endTime: string;
  status: string;
}

export default function UserTableData({
  date,
  startTime,
  endTime,
  status,
}: TableDataProps) {
  return (
    <tr>
      <td className="border border-gray-600">{date}</td>
      <td className="border border-gray-600">{startTime}</td>
      <td className="border border-gray-600">{endTime}</td>
      <td className="border border-gray-600">
        <span
          className={`badge ${
            status === "Confirmed"
              ? "badge-success"
              : status === "Pending"
                ? "badge-warning"
                : "badge-error"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}
