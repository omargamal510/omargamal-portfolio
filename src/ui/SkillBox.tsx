interface SkillBoxProps {
  skill: string;
  color?: string;
}

const SkillBox = ({ skill = "Web development", color }: SkillBoxProps) => {
  return (
    <div
      className={`${color} bg-opacity-gray active:text-white hover:text-white transition-300 px-5 py-3 cursor-pointer rounded-md text-secondary-gray font-bold`}
    >
      {skill}
    </div>
  );
};

export default SkillBox;
