interface TableDataProps {
  date: string;
  startTime: string;
  endTime: string;
  status: string;
}

export default function UserTableData(props: TableDataProps) {
  return (
    <tr>
      <td className="border border-gray-600">{props.date}</td>
      <td className="border border-gray-600">{props.startTime}</td>
      <td className="border border-gray-600">{props.endTime}</td>
      <td className="border border-gray-600">
        <span
          className={`badge ${
            props.status === "Confirmed"
              ? "badge-success"
              : props.status === "Pending"
                ? "badge-warning"
                : "badge-error"
          }`}
        >
          {props.status}
        </span>
      </td>
    </tr>
  );
}
