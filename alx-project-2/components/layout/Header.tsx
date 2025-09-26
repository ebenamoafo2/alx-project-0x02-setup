import { HeaderProps } from '@/interfaces'

export default function Header ({ title }: HeaderProps){
    return(
        <header className="bg-blue-600 text-white shadow-md text-center">
            {title}
        </header>
    )
}