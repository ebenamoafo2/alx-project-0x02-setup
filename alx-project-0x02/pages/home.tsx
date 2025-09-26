import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Card from "@/components/common/Card";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<string[]>([]);

  const handleNewPost = (newPost: string) => {
    setPosts([newPost, ...posts]); // add new post at top
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to the Home Page 🏠
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Create Post
        </button>
      </section>

      {isModalOpen && (
        <PostModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleNewPost}
        />
      )}

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <Card
            key={index}
            title={`Post #${index + 1}`}
            content={post}
          />
        ))}
      </div>
    </>
  );
}
