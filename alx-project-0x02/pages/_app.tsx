// pages/_app.tsx
import type { AppProps } from "next/app";
import "@/styles/globals.css";


export default function App({ Component, pageProps }: AppProps) {
  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Posts", href: "/posts"}
  ];

  return (
    <>
      
      <main className="max-w-6xl mx-auto px-6">
        <Component {...pageProps} />
      </main>

    </>
  );
}
