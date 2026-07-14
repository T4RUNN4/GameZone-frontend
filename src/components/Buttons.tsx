interface ButtonProps {
  text: string;
  type: "primary" | "secondary";
  onClick?: () => void;
}

export default function Button({ text, type, onClick }: ButtonProps) {
  const baseClasses = "btn border-none py-2 px-6 rounded-md hover:scale-105 transition-transform duration-200 shadow-md";
  const typeClasses =
    type === "primary"
      ? "bg-linear-to-r from-[#1f6eae] to-[#4acff0] text-white"
      : "bg-gray-300 hover:bg-gray-400 text-gray-800";

  return (
    <button
      className={`${baseClasses} ${typeClasses}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}