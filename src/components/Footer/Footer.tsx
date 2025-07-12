import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex-center flex-col gap-14 md:px-0 px-8 py-14">
      <div className="flex-center md:flex-row flex-col-reverse  md:!items-start [&>*]:w-full gap-14 md:gap-20 w-full md:w-[70%] border-b border-main-gray pb-14">
        <div className="flex flex-col gap-5">
          <h2 className="uppercase font-bold text-2xl">Omar Gamal</h2>
          <p className="text-sm">
            A passionate Frontend Developer crafting user-friendly and visually
            engaging websites and web applications that drive product success
            and user satisfaction.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:items-end ">
          <h3>Socials</h3>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/omar-gamal-98881b14b/"
              className="border p-2 border-main-gray"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 432 432"
              >
                <path
                  fill="currentColor"
                  d="M319 221.5q-8-10.5-30-10.5q-27 0-38 16t-11 45v146q0 5-3 8t-8 3h-76q-4 0-7.5-3t-3.5-8V148q0-4 3.5-7.5t7.5-3.5h74q4 0 6.5 2t3.5 6v5q1 2 1 7q28-27 76-27q53 0 83 27t30 79v182q0 5-3.5 8t-7.5 3h-78q-4 0-7.5-3t-3.5-8V254q0-22-8-32.5zM88 91.5Q73 107 51.5 107T15 91.5t-15-37T15 18T51.5 3T88 18t15 36.5t-15 37zm13 56.5v270q0 5-3.5 8t-7.5 3H14q-5 0-8-3t-3-8V148q0-4 3-7.5t8-3.5h76q4 0 7.5 3.5t3.5 7.5z"
                />
              </svg>
            </a>

            <a
              href="https://github.com/omargamal510"
              className="border p-2 border-main-gray"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M9.096 21.25v-3.146a3.33 3.33 0 0 1 .758-2.115c-3.005-.4-5.28-1.859-5.28-5.798c0-1.666 1.432-3.89 1.432-3.89c-.514-1.13-.5-3.084.06-3.551c0 0 1.95.175 3.847 1.75c1.838-.495 3.764-.554 5.661 0c1.897-1.575 3.848-1.75 3.848-1.75c.558.467.573 2.422.06 3.551c0 0 1.432 2.224 1.432 3.89c0 3.94-2.276 5.398-5.28 5.798a3.33 3.33 0 0 1 .757 2.115v3.146" />
                  <path d="M3.086 16.57c.163.554.463 1.066.878 1.496c.414.431.932.77 1.513.988a4.46 4.46 0 0 0 3.62-.216" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* <hr className="border w-[70%]" /> */}

      <p className="text-sm">
        © Copyright 2025 . Made by{" "}
        <a className="underline " href="#">
          {" "}
          Omar Gamal{" "}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
