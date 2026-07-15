import Image from "next/image";

interface ReviewCardProps {
    image: string;
    name: string;
    date: string;
    review: string;
}

export default function ReviewCard(props: ReviewCardProps) {
  const imageSize: number = 150;

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-center gap-8 border border-gray-600 p-4 rounded-md hover:scale-105 transition-transform duration-200">
      <Image
        src={props.image}
        alt={props.name}
        height={imageSize}
        width={imageSize}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-1">{props.name}</h2>
        <h4 className="text-sm text-gray-400 mb-6">{props.date}</h4>
        <p className="text-lg">{props.review}</p>
      </div>
    </div>
  );
}