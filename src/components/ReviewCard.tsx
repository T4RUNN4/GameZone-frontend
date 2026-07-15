import Image from "next/image";

interface ReviewCardProps {
    image: string;
    name: string;
    date: string;
    review: string;
}

export default function ReviewCard({ image, name, date, review }: ReviewCardProps) {
    const imageSize: number = 150;

    return (
      <div className="flex items-center justify-center gap-8 border border-gray-600 p-4 rounded-md hover:scale-105 transition-transform duration-200">
        <Image
          src={image}
          alt={name}
          height={imageSize}
          width={imageSize}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-1">{name}</h2>
          <h4 className="text-sm text-gray-400 mb-6">{date}</h4>
          <p className="text-lg">{review}</p>
        </div>
      </div>
    );
}