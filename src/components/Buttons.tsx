import Link from "next/link";

type ButtonProps =
  | {
      text: string;
      type: "primary" | "secondary" | "success" | "error";
      task: "hyperlink";
      href: string;
    }
  | {
      text: string;
      type: "primary" | "secondary" | "success" | "error";
      task?: "button";
      btnType?: "submit" | "button";
      onClick?: () => void;
    };

export default function Button(props: ButtonProps) {
  const baseClasses =
    "btn border-none py-2 px-6 rounded-md hover:scale-105 transition-transform duration-200 shadow-md";

  const typeClasses =
    props.type === "primary"
      ? "bg-linear-to-r from-[#1f6eae] to-[#4acff0] text-white"
      : props.type === "secondary"
      ? "bg-gray-500 text-white"
      : props.type === "success"
      ? "bg-green-500 text-white"
      : "bg-red-500 text-white";

  if (props.task === "hyperlink") {
    return (
      <Link
        href={props.href}
        className={`${baseClasses} ${typeClasses}`}
      >
        {props.text}
      </Link>
    );
  }

  return (
    <button
      className={`${baseClasses} ${typeClasses}`}
      type={props.btnType ?? "button"}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}