"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const Menus = [
    { name: "Home", href: "/" },
    { name: "Map", href: "/map" },
    { name: "Create", href: "/create" },
    { name: "Personal", href: "/personal" },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="bg-yellow-50 h-18 px-4 fixed bottom-0 w-full">
      <ul className="flex relative">
        {Menus.map((menu, i) => (
          <li key={i} className="w-20">
            <Link
              href={menu.href}
              className="flex flex-col text-center p-5 cursor-pointer px-4"
              onClick={() => setActive(i)}
            >
              <span
                className={` ${
                  active === i
                    ? " duration-700 opacity-100 font-bold"
                    : "opacity-40"
                } `}
              >
                {menu.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
