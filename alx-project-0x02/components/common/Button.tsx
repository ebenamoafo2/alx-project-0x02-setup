import { type ButtonProps } from "@/interfaces";

export default function Button({
  label,
  onClick,
  size = "medium",
  shape = "rounded-md",
  type = "button",
}: ButtonProps) {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 text-white hover:bg-blue-700 transition 
                  ${sizeClasses[size]} ${shape}`}
    >
      {label}
    </button>
  );
}
