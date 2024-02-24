"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import createIcon from "../../../../public/icons/create_GraffitiMap.png";
import homeIcon from "../../../../public/icons/Haus_GraffitiMap.png";
import mapIcon from "../../../../public/icons/Marker_GraffitiMap.png";
import personalIcon from "../../../../public/icons/Nutzer_GraffitiMap.png";

export default function NavBar() {
  const Menus = [
    { name: "Home", href: "/", src: homeIcon },
    { name: "Map", href: "/map", src: mapIcon },
    { name: "Create", href: "/create", src: createIcon },
    { name: "Personal", href: "/personal", src: personalIcon },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="bg-white h-14 border-t fixed bottom-0 w-full">
      <ul className="flex justify-evenly">
        {Menus.map((menu, i) => (
          <li key={i} className="">
            <Link
              href={menu.href}
              className="flex flex-col items-center p-2 cursor-pointer"
              // onClick={() => setActive(i)}
            >
              <Image
                src={menu.src}
                width={25}
                height={25}
                alt={`${menu.name} icon`}
              />
              <span
                className="text-xs"

                // className={` ${
                //   active === i
                //     ? " duration-700 opacity-100 font-bold"
                //     : "opacity-40"
                // } `}
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
