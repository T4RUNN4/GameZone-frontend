import { format, parse } from "date-fns";

interface TableDataProps {
  date: string;
  startTime: string;
  endTime: string;
  status: string;
}

export default function UserTableData(props: TableDataProps) {
  return (
    <tr>
      <td className="border border-gray-600">{format(props.date, "PPP")}</td>
      <td className="border border-gray-600">
        {format(parse(props.startTime, "HH:mm", new Date()), "h:mm a")}
      </td>
      <td className="border border-gray-600">
        {format(parse(props.endTime, "HH:mm", new Date()), "h:mm a")}
      </td>
      <td className="border border-gray-600">
        <span
          className={`badge capitalize ${
            props.status === "confirmed"
              ? "badge-success"
              : props.status === "rejected"
                ? "badge-error"
                : "badge-ghost"
          }`}
        >
          {props.status}
        </span>
      </td>
    </tr>
  );
}
