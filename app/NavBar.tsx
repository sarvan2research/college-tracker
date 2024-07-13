import Link from "next/link";
import React from "react";
import { PiStudentBold } from "react-icons/pi";

const NavBar = () => {
  const linksMap = [
    { label: "Home", href: "/" },
    { label: "Issue", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <PiStudentBold />
      </Link>
      <ul className="flex space-x-5">
        {linksMap.map((link) => (
          <Link
            href={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
