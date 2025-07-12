interface PurpleButtonProps {
  text: string;
  href: string;
  ariaLabel: string;
  target: string;
}

const PurpleButton = ({
  text = "",
  href = "/",
  ariaLabel = "Navigation button",
  target = "_self",
}: PurpleButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className="bg-main-purple hover:opacity-80 transition-300 w-48 text-lg font-bold uppercase text-white h-12  rounded-lg cursor-pointer"
    >
      <a
        className="size-full flex-center block border"
        href={href}
        rel="noopener noreferrer"
        target={target}
      >
        {text}
      </a>
    </button>
  );
};

export default PurpleButton;
