import Button from "@/components/Buttons";
import InputFieldLabel from "@/components/InputFieldLabel";
import SectionContainer from "@/components/SectionContainer";

export default function Register() {
  return (
    <SectionContainer
      title="Register"
      subtitle="Join GameZone to book your slots and manage your bookings"
    >
      <div className="flex mx-auto max-w-5xl items-center justify-center">
        <form className="w-full rounded-box border border-gray-600 p-8">
          <div className="flex flex-col gap-2 mb-6">
            <InputFieldLabel text="Full Name" required />
            <input
              type="text"
              className="input text-black w-full"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <InputFieldLabel text="Contact Number" required />
            <input
              type="text"
              className="input text-black w-full"
              placeholder="123-456-7890"
            />
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <InputFieldLabel text="Profile Picture" required />
            <input
              type="text"
              className="input text-black w-full"
              placeholder="example.com/profile.jpg"
            />
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <InputFieldLabel text="Email Address" required />
            <input
              type="email"
              className="input text-black w-full"
              placeholder="john.doe@example.com"
            />
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <InputFieldLabel text="Password" required />
            <input
              type="password"
              className="input text-black w-full"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button text="Register" type="primary" task="button" />
            <Button text="Clear" type="secondary" task="button" />
          </div>
        </form>
      </div>
    </SectionContainer>
  );
}
