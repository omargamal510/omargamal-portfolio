interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({
  title = "",
  description = "",
}: SectionHeaderProps) => {
  return (
    <div className="flex-center flex-col text-center gap-3 pb-20">
      <h2 className="text-3xl uppercase font-bold">{title}</h2>
      <hr className="w-8 border-2 rounded-full border-main-purple" />
      <p className="text-secondary-gray w-[90%] md:w-1/2">{description}</p>
    </div>
  );
};

export default SectionHeader;
