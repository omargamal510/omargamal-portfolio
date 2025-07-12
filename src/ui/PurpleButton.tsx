import Link from "next/link";

interface PurpleButtonProps {
  text: string;
  href: string;
  ariaLabel: string;
}

const PurpleButton = ({
  text = "",
  href = "/",
  ariaLabel = "Navigation button",
}: PurpleButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className="bg-main-purple w-48 text-lg font-bold uppercase text-white h-12  rounded-lg cursor-pointer"
    >
      <Link className="size-full flex-center block border" href={href}>
        {text}
      </Link>
    </button>
  );
};

export default PurpleButton;
