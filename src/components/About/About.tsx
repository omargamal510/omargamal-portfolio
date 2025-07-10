import PurpleButton from "@/ui/PurpleButton";
import SectionHeader from "@/ui/SectionHeader";
import SkillBox from "@/ui/SkillBox";

interface SkillsArray {
  name: string;
  color: string;
}

const skills: SkillsArray[] = [
  { name: "HTML5", color: "hover:bg-[#e34c26] active:bg-[#e34c26]" },
  { name: "CSS4", color: "hover:bg-[#264de4] active:bg-[#264de4]" },
  { name: "SEO", color: "hover:bg-[#3cba54] active:bg-[#3cba54]" },
  { name: "JavaScript", color: "hover:bg-[#f7df1e] active:bg-[#f7df1e]" },
  { name: "ES6", color: "hover:bg-[#f7df1e] active:bg-[#f7df1e]" },
  { name: "Next.js", color: "hover:bg-[#000000] active:bg-[#000000]" },
  { name: "React.js", color: "hover:bg-[#61dafb] active:bg-[#61dafb]" },
  { name: "Sass", color: "hover:bg-[#cd6799] active:bg-[#cd6799]" },
  { name: "jQuery", color: "hover:bg-[#0769ad] active:bg-[#0769ad]" },
  { name: "Git", color: "hover:bg-[#f05032] active:bg-[#f05032]" },
  { name: "GitHub", color: "hover:bg-[#181717] active:bg-[#181717]" },
  { name: "Tailwind CSS", color: "hover:bg-[#38bdf8] active:bg-[#38bdf8]" },
  { name: "Bootstrap", color: "hover:bg-[#7952b3] active:bg-[#7952b3]" },
  { name: "Webpack CLI", color: "hover:bg-[#8dd6f9] active:bg-[#8dd6f9]" },
  { name: "TypeScript", color: "hover:bg-[#3178c6] active:bg-[#3178c6]" },
  { name: "Vue.js", color: "hover:bg-[#42b883] active:bg-[#42b883]" },
  {
    name: "Basic Knowledge in Express",
    color: "hover:bg-[#808080] active:bg-[#808080]",
  },
  {
    name: "Basic Knowledge in MongoDB",
    color: "hover:bg-[#47a248] active:bg-[#47a248]",
  },
];

const About = () => {
  return (
    <div className="bg-white-gray">
      <SectionHeader
        title="about me"
        description="Learn more about me, my background, and the tools I use to build scalable, user-friendly and responsive web apps."
      />

      <div className="flex flex-col md:flex-row gap-14">
        <div className="w-full flex flex-col gap-5">
          <h3 className="text-2xl font-bold">Know me better !</h3>
          <div className="flex flex-col gap-5 text-secondary-gray">
            <p>
              I'm a <strong>Frontend Web Developer</strong> with a strong focus
              on building and maintaining the user interface of modern websites
              and applications. My goal is to create clean, efficient, and
              engaging experiences that support the success of digital products.
              You can explore some of my recent work in the{" "}
              <strong>Projects</strong> section.
            </p>

            <p>
              I enjoy sharing what I learn in web development to support and
              connect with other developers. I regularly post insights, tips,
              and resources on{" "}
              <a
                className="text-main-purple font-bold underline"
                href="https://www.linkedin.com/in/omar-gamal-98881b14b/"
                target="_blank"
              >
                LinkedIn
              </a>{" "}
              and you can check more about my projects through{" "}
              <a
                className="text-main-purple font-bold underline"
                href="https://github.com/omargamal510"
                target="_blank"
              >
                Github
              </a>{" "}
            </p>

            <p>
              I'm currently open to new roles where I can apply my skills, grow
              professionally, and be part of meaningful projects. If you think
              I’d be a good fit for your team, feel free to contact me{" "}
            </p>
          </div>

          <PurpleButton text="contact" href="/" />
        </div>
        <div className="w-full flex flex-col gap-5">
          <h3 className="text-2xl font-bold">My Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map(({ name, color }, index) => (
              <SkillBox skill={name} key={name} color={color} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
