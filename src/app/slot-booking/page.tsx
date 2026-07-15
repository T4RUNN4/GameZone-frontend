"use client";

import Button from "@/components/Buttons";
import InputFieldLabel from "@/components/InputFieldLabel";
import SectionContainer from "@/components/SectionContainer";
import { SubmitHandler, useForm } from "react-hook-form";
import { format, parseISO, isBefore, startOfDay, getDay } from "date-fns";
import { authClient } from "@/lib/auth-client";
import { addSlots } from "@/lib/addSlots";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Inputs = {
  date: string;
  startTime: string;
  endTime: string;
};

export default function SlotBooking() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const selectedDate = watch("date");
  const startTime = watch("startTime");

  const now = new Date();
  const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  const getAllowedHours = (date: string) => {
    const day = getDay(parseISO(date));

    if (day === 5 || day === 6) {
      return {
        start: "15:00",
        end: "23:00",
      };
    }

    return {
      start: "10:00",
      end: "20:00",
    };
  };

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formattedData = {
      ...data,
      userId: user?.id,
      userName: user?.name,
      status: "pending",
    };

    const result = await addSlots(formattedData);
    if (result.acknowledged) {
      toast.success("Slot booking request submitted");
      reset();
      router.push("/your-bookings");
    }
  };

  return (
    <SectionContainer
      title="Slot Booking"
      subtitle="Book your preferred time slot for gaming sessions and ensure a seamless gaming experience."
    >
      <div className="flex mx-auto max-w-5xl items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full rounded-box border border-gray-600 p-8"
        >
          <p className="text-center text-2xl font-bold mb-4">Booking Date</p>

          <div className="flex flex-col gap-2 mb-6">
            <InputFieldLabel text="Preffered Date" required />
            <input
              type="date"
              className="input text-black w-full"
              {...register("date", {
                required: "Date is required",
                validate: (value) => {
                  const date = parseISO(value);

                  return (
                    !isBefore(date, startOfDay(new Date())) ||
                    "Booking date cannot be in the past."
                  );
                },
              })}
            />
            {errors.date && (
              <span className="text-sm text-red-500 font-medium">
                {errors.date.message}
              </span>
            )}
          </div>

          <p className="text-center text-2xl font-bold mb-4">Booking Time</p>

          <div className="flex flex-col gap-2 mb-6">
            <InputFieldLabel text="Start Time" required />
            <input
              type="time"
              className="input text-black w-full"
              {...register("startTime", {
                required: "Start time is required",

                validate: (value) => {
                  if (!selectedDate) return "Select a date first";

                  const hours = getAllowedHours(selectedDate);

                  if (value < hours.start)
                    return `Shop opens at ${hours.start}`;

                  if (value >= hours.end)
                    return `Last playable time starts before ${hours.end}`;

                  if (selectedDate === format(new Date(), "yyyy-MM-dd")) {
                    if (value < currentTime) {
                      return "Start time cannot be in the past.";
                    }
                  }
                  return true;
                },
              })}
            />
            {errors.startTime && (
              <span className="text-sm text-red-500 font-medium">
                {errors.startTime.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <InputFieldLabel text="End Time" required />
            <input
              type="time"
              className="input text-black w-full"
              {...register("endTime", {
                required: "End time is required",

                validate: (value) => {
                  if (!selectedDate) return "Select a date first";

                  const hours = getAllowedHours(selectedDate);

                  if (value <= startTime)
                    return "End time must be after start time";

                  if (value > hours.end) return `Shop closes at ${hours.end}`;

                  return true;
                },
              })}
            />
            {errors.endTime && (
              <span className="text-sm text-red-500 font-medium">
                {errors.endTime.message}
              </span>
            )}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              text="Book Slot"
              type="primary"
              task="button"
              btnType="submit"
            />
            <Button
              text="Clear"
              type="secondary"
              task="button"
              onClick={() => reset()}
            />
          </div>
        </form>
      </div>
    </SectionContainer>
  );
}
