import Link from "next/link";

type ButtonProps =
  | {
      text: string;
      type: "primary" | "secondary";
      task: "hyperlink";
      href: string;
    }
  | {
      text: string;
      type: "primary" | "secondary";
      task?: "button";
      onClick?: () => void;
    };

export default function Button(props: ButtonProps) {
  const baseClasses =
    "btn border-none py-2 px-6 rounded-md hover:scale-105 transition-transform duration-200 shadow-md";

  const typeClasses =
    props.type === "primary"
      ? "bg-linear-to-r from-[#1f6eae] to-[#4acff0] text-white"
      : "bg-gray-300 hover:bg-gray-400 text-gray-800";

  if (props.task === "hyperlink") {
    return (
      <Link
        href={props.href}
        className={`${baseClasses} ${typeClasses}`}u
      >
        {props.text}
      </Link>
    );
  }

  return (
    <button
      className={`${baseClasses} ${typeClasses}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}