// pages/home.tsx
import Head from "next/head";
import Card from '@/components/common/Card'

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <Card 
        title="Introduction" 
        content="Welcome to the ALX Project home page. This is a reusable card component." 
      />
      <Card 
        title="Learning Path" 
        content="Explore the different stages of your Next.js journey and build projects step by step." 
      />
      <Card 
        title="Next Steps" 
        content="Use this Card component to display any content dynamically throughout your app." 
      />
    </div>
    </>
  );
}
