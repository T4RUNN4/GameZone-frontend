"use client";

import Link from "next/link";
import Button from "./Buttons";
import NavLinkContainer from "./NavLinkContainer";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();

    return (
      <div className="navbar shadow-sm px-30 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <NavLinkContainer isMobile={true} />
          </div>
          <Link
            href="/"
            className="text-3xl font-bold bg-linear-to-r from-[#1f6eae] to-[#4acff0] text-transparent bg-clip-text"
          >
            GameZone
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLinkContainer isMobile={false} />
        </div>
        <div className="navbar-end flex gap-4">
          {isPending ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : user ? (
            <>
              <Image
                src={
                  user.image ??
                  "data:image/jpeg;base64,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"
                }
                alt={user.name}
                height={30}
                width={50}
              />
              <div className="flex flex-col gap-2">
                <p className="font-medium text-lg">{user.name}</p>
                <Button
                  text="Logout"
                  type="error"
                  task="button"
                  onClick={async () => {await authClient.signOut(); router.refresh()}}
                />
              </div>
            </>
          ) : (
            <>
              <Button
                text="Login"
                type="primary"
                task="hyperlink"
                href="/login"
              />
              <Button
                text="Register"
                type="secondary"
                task="hyperlink"
                href="/register"
              />
            </>
          )}
        </div>
      </div>
    );
}