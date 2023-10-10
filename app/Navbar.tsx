import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex items-center space-x-6 border-b px-5 h-14 mb-5">
      <Link href={"/"}>
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.href}
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
