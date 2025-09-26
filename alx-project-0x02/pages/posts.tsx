import Head from "next/head";
import Header from "@/components/layout/Header";
export default function PostsPage() {

const navLinks = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Posts", href: "/posts" },
  ];

  return (
    <>
    <Header title="ALX Project" links={navLinks} /> 
      <Head>
        <title>Posts | ALX Project</title>
      </Head>

      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Posts Page 📝</h1>
        <p className="text-lg text-gray-700">
          This is the Posts page. All posts will appear here.
        </p>
      </section>
    </>
  );
}
