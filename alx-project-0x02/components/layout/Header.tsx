import Link from 'next/link'
import { HeaderProps } from '@/interfaces'

export default function Header ({ title ,links }: HeaderProps){
    return(
        <>
        <header className="bg-blue-600 text-white shadow-md text-center">
            <Link href="/" className="text-xl font-bold tracking-wide hover:opacity-80">
          {title}
            </Link>

            {/* Navigation */}
            <nav className="space-x-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
            </nav>
        </header>
        </>
    )
}