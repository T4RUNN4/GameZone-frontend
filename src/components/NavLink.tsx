"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  link: string;
  text: string;
}

export default function NavLink(props: NavLinkProps) {
  const pathName = usePathname(); 

  return (
    <li className={`${pathName === props.link ? "text-blue-500 underline underline-offset-8" : ""}`}>
      <Link href={props.link}>{props.text}</Link>
    </li>
  );
}
