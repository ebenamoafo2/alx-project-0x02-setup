import Link from "next/link";
import { type HeaderProps } from "@/interfaces";

export default function Header({ title, links }: HeaderProps) {
  
  const defaultLinks = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Posts", href: "/posts" },
  ];

  const navLinks = links && links.length ? links : defaultLinks;

  return (
    <header className="w-full bg-blue-600 text-white shadow-md text-center p-4 ">
      <Link href="/" className="text-xl font-bold tracking-wide hover:opacity-80">
        {title}
      </Link>

      <nav className="mt-2 space-x-6">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
