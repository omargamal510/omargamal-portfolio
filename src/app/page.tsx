import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Observer from "@/ui/Observer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="[&>*]:lg:px-56 [&>*]:px-8 [&>*]:py-20">
        <About />
      </div>
    </div>
  );
}
