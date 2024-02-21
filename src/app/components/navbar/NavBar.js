"use client";

import { useState } from "react";

export default function NavBar() {
  const Menus = [
    { name: "Home" },
    { name: "Profile" },
    { name: "Message" },
    { name: "Photos" },
    { name: "Settings" },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="bg-yellow-50 h-18 px-4">
      <ul className="flex relative">
        {Menus.map((menu, i) => (
          <li key={i} className="w-20">
            <a
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
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
