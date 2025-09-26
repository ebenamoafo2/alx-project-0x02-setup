import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import type { PostProps } from "@/interfaces";

export default function PostsPage() {
  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Posts", href: "/posts" },
  ];

  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        const data = await res.json();
        const mappedPosts = data.map((p: any) => ({
          userId: p.userId,
          title: p.title,
          content: p.body,
        }));
        setPosts(mappedPosts);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Header title="ALX Project" links={navLinks} />

      <Head>
        <title>Posts | ALX Project</title>
      </Head>

      <section className="flex flex-col items-center justify-center min-h-[20vh] text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Posts Page 📝</h1>
        <p className="text-lg text-gray-700">
          This is the Posts page. All posts will appear below.
        </p>
      </section>

      {loading ? (
        <p className="text-center text-gray-600">Loading posts...</p>
      ) : (
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={`${post.userId}-${post.title}`}
              userId={post.userId}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
      )}
    </>
  );
}
