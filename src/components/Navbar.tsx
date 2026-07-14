import Link from "next/link";
import Button from "./Buttons";
import NavLinkContainer from "./NavLinkContainer";

export default function Navbar() {
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
          <Button text="Login" type="primary" task="hyperlink" href="/login" />
          <Button text="Register" type="secondary" task="hyperlink" href="/register" />
        </div>
      </div>
    );
}