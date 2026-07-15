"use client";

import Button from "@/components/Buttons";
import InputFieldLabel from "@/components/InputFieldLabel";
import SectionContainer from "@/components/SectionContainer";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  gameName: string;
  gameShortDescription: string;
  gameDescription: string;
  gameImageURL: string;
  gameCategory: string;
  hourlyRate: number;
};

export default function AddGames() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/add-games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }) ;
    const result = await response.json();

    if(result.ok === "true") {
      toast.success("New Game Added");
      reset();
      router.push("/games");
    } else {
      toast.error("Something Went Wrong. Please Try Again");
    }
    
  };

  return (
    <SectionContainer
      title="Add Games"
      subtitle="Add new games to the collection for customers to enjoy"
    >
      <div className="flex mx-auto max-w-5xl items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full rounded-box border border-gray-600 p-8"
        >
          <div className="flex flex-col gap-2 mb-6">
            <InputFieldLabel text="Game Name" required />
            <input
              type="text"
              className="input text-black w-full"
              placeholder="WWE 2k26"
              {...register("gameName", { required: "Game Name is required" })}
            />
            {errors.gameName && (
              <span className="text-sm text-red-500 font-medium">
                {errors.gameName.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <InputFieldLabel text="Short Description" required />
            <input
              type="text"
              className="input text-black w-full"
              placeholder="Enter short description"
              {...register("gameShortDescription", {
                required: "Game Short Description is required",
              })}
            />
            {errors.gameShortDescription && (
              <span className="text-sm text-red-500 font-medium">
                {errors.gameShortDescription.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <InputFieldLabel text="Detailed Description" required />
            <textarea
              placeholder="Enter detailed description of the game"
              className="textarea text-black w-full"
              {...register("gameDescription", {
                required: "Game Description is required",
              })}
            />
            {errors.gameDescription && (
              <span className="text-sm text-red-500 font-medium">
                {errors.gameDescription.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <InputFieldLabel text="Game Image URL" required />
            <input
              type="text"
              className="input text-black w-full"
              placeholder="Enter game image URL"
              {...register("gameImageURL", {
                required: "Game Image URL is required",
              })}
            />
            {errors.gameImageURL && (
              <span className="text-sm text-red-500 font-medium">
                {errors.gameImageURL.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <InputFieldLabel text="Hourly Rate" required />
            <input
              type="number"
              className="input text-black w-full"
              placeholder="Enter hourly rate"
              {...register("hourlyRate", {
                required: "Hourly rate is required",
                validate: (hourlyRate) =>
                  !isNaN(Number(hourlyRate)) || "Must be a number",
              })}
            />
            {errors.hourlyRate && (
              <span className="text-sm text-red-500 font-medium">
                {errors.hourlyRate.message}
              </span>
            )}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button text="Add Game" type="primary" task="button" btnType="submit" />
            <Button text="Clear" type="secondary" onClick={() => reset()} task="button" />
          </div>
        </form>
      </div>
    </SectionContainer>
  );
}
