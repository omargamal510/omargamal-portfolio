import { ProjectTypes } from "@/components/Projects/Projects";
import Observer from "@/ui/Observer";
import PurpleButton from "@/ui/PurpleButton";
import Image from "next/image";

const SingleProject = ({ title, description, src, href }: ProjectTypes) => {
  return (
    <div className="flex-center lg:flex-row flex-col gap-2 md:gap-10 ">
      <Observer>
        <div className="relative w-[300px] xl:w-[500px] aspect-[16/9] h-[300px] rounded-2xl overflow-hidden">
          <Image
            src={src}
            fill
            className="object-contain ml-0 xl:-ml-9 rounded-2xl"
            alt="project"
          />
        </div>
      </Observer>

      <Observer yaxis={true}>
        <div className="w-full flex justify-center md:min-h-[300px] flex-col gap-5 md:gap-8 lg:items-start items-center">
          <h3 className="text-2xl font-bold uppercase">{title}</h3>
          <p className="flex flex-col gap-5 lg:text-start text-center text-secondary-gray">
            {description}
          </p>

          <PurpleButton
            target="_blank"
            text="Live Preview </>"
            href={href}
            ariaLabel={`navigate ${title}`}
          />
        </div>
      </Observer>
    </div>
  );
};

export default SingleProject;
