import SingleProject from "@/components/Projects/SingleProject";
import Observer from "@/ui/Observer";
import SectionHeader from "@/ui/SectionHeader";

export interface ProjectTypes {
  title: string;
  description: string;
  src: string;
}

const projects: ProjectTypes[] = [
  {
    title: "nvidia studio nights 5",
    description:
      "A vibrant event focused on 3D/CGI, architectural visualization, digital fashion, and photography. Studio Night 5 highlighted digital creativity and innovation while bringing together Egypt’s creative community — a celebration of artistic expression powered by NVIDIA technologies.",
    src: "/nvidia.png",
  },

  {
    title: "nobles",
    description:
      "A global creative agency offering tailored digital and business solutions. From branding to development, we help businesses transform ideas into impactful results across the world.",
    src: "/nobles.webp",
  },

  {
    title: "Ramadan Raid 25",
    description:
      "An epic gaming and entertainment event held in Tahrir Square during Ramadan 2025. Ramadan Raid 25 brings together players, fans, and creators for a vibrant celebration of games, tech, and community.",
    src: "/raid.png",
  },

  // {
  //   title: "2020",
  //   description: "lorem lorem lorem",
  //   src: "/2020.png",
  // },

  // {
  //   title: "Dr morad omar",
  //   description: "lorem lorem lorem",
  //   src: "/morad.png",
  // },
];

const Projects = () => {
  return (
    <div>
      <Observer yaxis={true}>
        <SectionHeader
          title="projects"
          description="In this section you will find some of my work and client projects and every project contain its details and live preview"
        />
      </Observer>

      <div className="flex flex-col gap-20">
        {projects.map(({ title, description, src }, index) => (
          <SingleProject
            key={index}
            title={title}
            description={description}
            src={src}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
