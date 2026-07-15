import NavLink from "./NavLink";

interface NavLinkProps {
  isMobile: boolean;
}

export default function NavLinkContainer(props: NavLinkProps) {
  return (
    <ul
      tabIndex={props.isMobile ? -1 : undefined}
      className={`${props.isMobile ? "menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow" : "menu menu-horizontal px-1"}`}
    >
      <NavLink link="/" text="Home" />
      <NavLink link="/games" text="Games" />
      <NavLink link="/slot-booking" text="Slot Book" />
      <NavLink link="/add-games" text="Add Games" />
      <NavLink link="/manage-games" text="Manage Games" />
      <NavLink link="/your-bookings" text="Your Bookings" />
      <NavLink link="/manage-bookings" text="Manage Bookings" />
    </ul>
  );
}
