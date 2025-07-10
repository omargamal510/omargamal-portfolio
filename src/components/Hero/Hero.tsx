import HeroHeader from "@/components/Hero/HeroHeader";
import PurpleButton from "@/ui/PurpleButton";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-height-vh mt-20">
      <Image
        alt="hero background"
        src={"/common-bg.svg"}
        fill
        className="size-full"
      />

      <div className="overlay absolute inset-0 bg-gray-200/70 flex-center flex-col gap-8">
        <h1 className="text-[2.5rem]  px-20 text-center font-black uppercase">
          <HeroHeader textProp="Hello , I'm Omar Gamal" />
        </h1>
        <p className="text-center text-[1.2rem] px-10 text-main-gray leading-8">
          A dedicated Front-End Developer specializing in crafting responsive,
          user-focused websites and <br className="hidden md:block" /> web
          applications that drive performance and product success.
        </p>

        <PurpleButton text="projects" href="/" />
      </div>
    </div>
  );
};

export default Hero;
