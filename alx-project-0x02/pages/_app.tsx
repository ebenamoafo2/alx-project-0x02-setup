// pages/_app.tsx
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";

export default function App({ Component, pageProps }: AppProps) {
  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Posts", href: "/posts"}
  ];

  return (
    <>
      <Header title="ALX Project" links={navLinks} />
      <main className="max-w-6xl mx-auto px-6 pt-20">
        <Component {...pageProps} />
      </main>

    </>
  );
}
