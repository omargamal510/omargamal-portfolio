import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default async function Home() {
  await wait(1000); // simulate loading
  return (
    <div className="">
      <Hero />
      <div className="[&>*]:lg:px-56 [&>*]:px-8 [&>*]:py-20">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
