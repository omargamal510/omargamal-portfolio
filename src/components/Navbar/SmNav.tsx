"use client";

import { NavbarLinks } from "@/components/Navbar/Navbar";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const SmNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const smNavRef: any = useRef(null);

  function fadeInNav() {
    setIsOpen((prev) => !prev);

    setTimeout(() => {
      if (smNavRef.current) {
        smNavRef.current.classList.add("opacity-100");
      }
    }, 100);
  }

  return (
    <div className="flex md:hidden">
      <button className="cursor-pointer" onClick={fadeInNav}>
        <AlignJustify />
      </button>

      <div
        ref={smNavRef}
        style={{ direction: "rtl" }}
        className={`absolute bg-white left-0 right-0 top-20 transition-500 ${
          isOpen ? "block" : "hidden"
        } opacity-0`}
      >
        {NavbarLinks.map((e) => (
          <Link
            href={"/"}
            className="py-3 block font-bold cursor-pointer px-12 border-1 transition-300 hover:text-main-purple border-gray-100"
            key={e}
          >
            {e}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SmNav;
