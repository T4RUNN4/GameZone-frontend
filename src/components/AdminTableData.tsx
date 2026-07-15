"use client"

import { useRouter } from "next/navigation";
import Button from "./Buttons";
import { updateSlot } from "@/lib/updateSlot";
import { toast } from "react-toastify";

interface TableDataProps {
  id: string;
  name: string;
  date: string;
  time: string;
  status: string;
}

export default function AdminTableData(props: TableDataProps) {
  const router = useRouter();

  const handleStatusChange = async (status: string) => {
    const res = await updateSlot(props.id, status);

    if (res.modifiedCount === 1) {
      toast.success(`Slot ${status}`);
      router.refresh();
    } else {
      toast.error("Failed to update slot");
      console.log(res);
    }
  }

  return (
    <tr>
      <td className="border border-gray-600">{props.id}</td>
      <td className="border border-gray-600">{props.name}</td>
      <td className="border border-gray-600">{props.date}</td>
      <td className="border border-gray-600">{props.time}</td>
      {props.status === "pending" ? (
        <td className="flex items-center justify-center gap-4 border border-gray-600">
          <Button
            text="Approve"
            type="success"
            task="button"
            onClick={() => handleStatusChange("confirmed")}
          />
          <Button
            text="Reject"
            type="error"
            task="button"
            onClick={() => handleStatusChange("rejected")}
          />
        </td>
      ) : (
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
      )}
    </tr>
  );
}
