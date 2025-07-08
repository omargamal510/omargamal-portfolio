import SmNav from "@/components/Navbar/SmNav";
import Link from "next/link";

export const NavbarLinks: string[] = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  return (
    <nav className="flex justify-between h-20 items-center px-12 nav-box-shadow">
      <Link
        href={"/"}
        className="flex hover:[&>*]:text-main-purple gap-2 items-center cursor-pointer"
      >
        <img
          src={"/github-image-profile.jpg"}
          loading="lazy"
          decoding="async"
          className="w-12 rounded-full"
        />
        <h1 className="font-bold tracking-[1px] uppercase transition-300 text-lg text-[#333]">
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
