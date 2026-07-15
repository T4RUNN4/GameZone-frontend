"use client";
import { useSession } from "@/lib/auth-client";
import NavLink from "./NavLink";

interface NavLinkProps {
  isMobile: boolean;
}

export default function NavLinkContainer(props: NavLinkProps) {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  return (
    <ul
      tabIndex={props.isMobile ? -1 : undefined}
      className={`${props.isMobile ? "menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow" : "menu menu-horizontal px-1"}`}
    >
      <NavLink link="/" text="Home" />
      <NavLink link="/games" text="Games" />
      <NavLink link="/contact" text="Contact Us" />
      {user &&
        (user?.role === "admin" ? (
          <>
            <NavLink link="/add-games" text="Add Games" />
            <NavLink link="/manage-games" text="Manage Games" />
            <NavLink link="/manage-bookings" text="Manage Bookings" />
          </>
        ) : (
          <>
            <NavLink link="/slot-booking" text="Slot Book" />
            <NavLink link="/your-bookings" text="Your Bookings" />
          </>
        ))}
    </ul>
  );
}
