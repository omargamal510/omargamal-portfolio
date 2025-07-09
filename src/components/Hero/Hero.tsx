import HeroHeader from "@/components/Hero/HeroHeader";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/common-bg.svg')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="hero-height-vh"
    >
      <div className="overlay size-full bg-gray-200/70 flex-center flex-col gap-8">
        <h1 className="text-[2.5rem] text-center font-black uppercase">
          {/* Hello , I'm Omar Gamal */}
          <br />
          <HeroHeader textProp="Hello , I'm Omar Gamal" />
        </h1>
        <p className="text-center text-[1.2rem] px-10 text-main-gray leading-8">
          A dedicated Front-End Developer specializing in crafting responsive,
          user-focused websites and <br className="hidden md:block" /> web
          applications that drive performance and product success.
        </p>

        <button className="bg-main-purple font-bold uppercase text-white px-16 py-3 rounded-lg cursor-pointer">
          Projects
        </button>
      </div>
    </div>
  );
};

export default Hero;
