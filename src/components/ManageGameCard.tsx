import Image from "next/image";
import Button from "./Buttons";

interface ManageGamesCardProps {
    title: string;
    imageUrl: string;
    category: string;
    description: string;
    hourlyRate: number;
}

export default function ManageGamesCard(props: ManageGamesCardProps) {
    return (
      <div className="flex gap-4 items-center justify-between shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 py-4 px-8">
        <div className="flex gap-4 items-center">
          <div>
            <Image
              height={100}
              width={100}
              src={props.imageUrl}
              alt="Game Image"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-3xl">{props.title}</h3>
            <p className="text-lg font-semibold text-blue-500">{props.category}</p>
            <p className="my-4 text-xs text-justify">{props.description}</p>
            <p className="font-semibold">
              <span className="text-2xl text-blue-500">
                ${props.hourlyRate.toFixed(2)}
              </span>{" "}
              / hr
            </p>
          </div>
        </div>
        <div className="flex gap-4 justify-self-end">
            <Button text="Edit" type="secondary" task="button" />
            <Button text="Delete" type="error" task="button" />
        </div>
      </div>
    );
}