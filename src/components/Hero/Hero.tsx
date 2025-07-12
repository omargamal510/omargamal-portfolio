import HeroHeader from "@/components/Hero/HeroHeader";
import Observer from "@/ui/Observer";
import PurpleButton from "@/ui/PurpleButton";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-height-vh mt-20 relative">
      <Image
        alt="hero background"
        src={"/common-bg.svg"}
        fill
        className="size-full opacity-50"
      />

      <div className="overlay absolute inset-0  flex-center flex-col gap-8">
        <h1 className="text-[2.5rem]  px-20 text-center font-black uppercase">
          <HeroHeader textProp="Hello , I'm Omar Gamal" />
        </h1>
        <Observer>
          <p className="text-center text-[1.2rem] px-10 text-main-gray leading-8">
            A dedicated Front-End Developer specializing in crafting responsive,
            user-focused websites and <br className="hidden md:block" /> web
            applications that drive performance and product success.
          </p>
        </Observer>

        <PurpleButton
          target="_self"
          text="projects"
          href="#projects"
          ariaLabel="navigate to projects"
        />
      </div>
    </div>
  );
};

export default Hero;
