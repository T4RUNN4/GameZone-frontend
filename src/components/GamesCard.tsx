import Image from "next/image";
import Button from "./Buttons";

interface GamesCardProps {
    id: number;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
    hourlyRate: number;
}

export default function GamesCard(props: GamesCardProps) {
    return (
      <div className="p-4 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
        <Image height={500} width={500} src={props.imageUrl} alt={props.title} />
        <h3 className="mt-6 font-bold text-3xl">{props.title}</h3>
        <p className="text-lg font-semibold text-blue-500">{props.category}</p>
        <p className="mt-4 text-xs text-justify">{props.description}</p>
        <p className="mt-8 font-semibold">
          <span className="text-2xl text-blue-500">${props.hourlyRate.toFixed(2)}</span> / hr
        </p>
        <div className="mt-6">
          <Button text="View Details" type="primary" task="hyperlink" href={`/games/${props.id}`} />
        </div>
      </div>
    );
}