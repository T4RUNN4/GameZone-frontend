import Image from "next/image";
import Button from "./Buttons";

interface ManageGamesCardProps {
    title: string;
    imageUrl: string;
    category: string;
    description: string;
    hourlyRate: number;
}

export default function ManageGamesCard({ title, imageUrl, category, description, hourlyRate }: ManageGamesCardProps) {
    return (
      <div className="flex gap-4 items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 py-4 px-8">
        <div className="flex gap-4 items-center">
          <div>
            <Image
              height={100}
              width={100}
              src={imageUrl}
              alt="Game Image"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-3xl">{title}</h3>
            <p className="text-lg font-semibold text-blue-500">{category}</p>
            <p className="my-2 text-xs text-justify">{description}</p>
            <p className="font-semibold">
              <span className="text-2xl text-blue-500">
                ${hourlyRate.toFixed(2)}
              </span>{" "}
              / hr
            </p>
          </div>
        </div>
        <div className="flex gap-4 justify-self-end">
            <Button text="Edit" type="primary" task="button" />
            <Button text="Delete" type="secondary" task="button" />
        </div>
      </div>
    );
}