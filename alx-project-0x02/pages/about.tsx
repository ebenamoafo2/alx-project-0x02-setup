// pages/about.tsx
import Head from "next/head";
import Button from '@/components/common/Button';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | ALX Project</title>
      </Head>
      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          About Us 📖
        </h1>
        <p className="text-lg text-gray-700">
          This page contains information about the project.
        </p>

        <div className="flex gap-4 p-6">
      <Button label="Small Button" size="small" shape="rounded-sm" />
      <Button label="Medium Button" size="medium" shape="rounded-md" />
      <Button label="Large Button" size="large" shape="rounded-full" />
    </div>
      </section>
    </>
  );
}
