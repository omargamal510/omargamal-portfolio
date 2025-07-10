import SmNav from "@/components/Navbar/SmNav";
import Image from "next/image";
import Link from "next/link";

export const NavbarLinks: string[] = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  return (
    <nav className="fixed inset-0 bg-white z-10 flex justify-between h-20 items-center px-5 md:px-12 nav-box-shadow">
      <Link
        href={"/"}
        className="flex hover:[&>*]:text-main-purple gap-2 items-center cursor-pointer"
      >
        <div className="relative size-12">
          <Image
            alt="omar gamal"
            src={"/github-image-profile.jpg"}
            fill
            className="border-1 size-full rounded-full"
          />
        </div>
        <h1 className="font-bold tracking-[1px] uppercase transition-300 text-xl text-main-gray">
          Omar Gamal
        </h1>
      </Link>

      <div className="items-center font-bold justify-center gap-20 md:flex hidden ">
        {NavbarLinks.map((e) => (
          <Link
            className="hover:text-main-purple transition-300 uppercase"
            href={"/"}
            key={e}
          >
            {e}
          </Link>
        ))}
      </div>

      <SmNav />
    </nav>
  );
};

export default Navbar;
