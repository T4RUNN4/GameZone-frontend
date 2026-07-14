import Image from "next/image";

interface GamesCardProps {
    title: string;
    description: string;
    imageUrl: string;
    hourlyRate: number;
}

export default function GamesCard({ title, description, imageUrl, hourlyRate }: GamesCardProps) {
    return (
        <div className="p-4 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <Image height={500} width={500} src={imageUrl} alt={title} />
            <h3 className="mt-6 font-bold text-3xl">{title}</h3>
            <p className="mt-3 text-xs text-justify">{description}</p>
            <p className="mt-8 font-semibold">${hourlyRate.toFixed(2)} / hr</p>
        </div>
    )
}