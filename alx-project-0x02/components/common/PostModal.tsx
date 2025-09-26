import { useState } from "react";
import { PostModalProps } from "@/interfaces";

export default function PostModal({ onClose, onSubmit }: PostModalProps) {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!content.trim()) return;
    onSubmit(content);
    setContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-96 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Create Post</h2>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full h-28 border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
