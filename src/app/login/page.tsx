"use client";

import Button from "@/components/Buttons";
import InputFieldLabel from "@/components/InputFieldLabel";
import SectionContainer from "@/components/SectionContainer";
import { authClient } from "@/lib/auth-client";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "user@user.com",
      password: "admin123",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { error } = await authClient.signIn.email({
      ...data,
      rememberMe: true,
      callbackURL: "/",
    });

    if (!error) {
      toast.success("Welcome Back!");
      reset();
    } else {
      toast.error(error.message);
    }
  };

  return (
    <SectionContainer
      title="Login"
      subtitle="Login to book your slots and manage your bookings"
    >
      <div className="flex mx-auto max-w-5xl items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full rounded-box border border-gray-600 p-8"
        >
          <div className="flex flex-col gap-2 mb-6">
            <InputFieldLabel text="Email Address" required />
            <input
              type="email"
              className="input text-black w-full"
              placeholder="john.doe@example.com"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500 font-medium">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <InputFieldLabel text="Password" required />
            <input
              type="password"
              className="input text-black w-full"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-500 font-medium">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button text="Login" type="primary" btnType="submit" task="button" />
            <Button text="Clear" type="secondary" task="button" onClick={() => reset()} />
          </div>
        </form>
      </div>
    </SectionContainer>
  );
}
