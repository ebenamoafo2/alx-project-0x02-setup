import { CardProps } from '@/interfaces'

export default function Card({title, content}:CardProps) {
    return(
        <div className="rounded-2xl shadow-md bg-white p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
            <p className="text-gray-700">{content}</p>
        </div>
    )
}