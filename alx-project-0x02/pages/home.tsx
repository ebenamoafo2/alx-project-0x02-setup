// pages/home.tsx
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | ALX Project</title>
      </Head>
      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to the Home Page 🏠
        </h1>
        <p className="text-lg text-gray-700">
          This is the Home page of our Next.js project.
        </p>
      </section>
    </>
  );
}
