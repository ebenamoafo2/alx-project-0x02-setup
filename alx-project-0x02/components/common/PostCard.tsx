import type { PostProps } from "@/interfaces";

export default function PostCard({ userId, title, content }: PostProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white text-gray-800">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{content}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
}
