import type { UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white text-gray-800">
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <p className="text-gray-700 mb-1">{email}</p>
      <p className="text-gray-500 text-sm">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
}
