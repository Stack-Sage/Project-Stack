import React, { useRef, useEffect, useState } from "react";
import projectInfo from "./info";
import { ReactLenis } from "lenis/react";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
import Select from "react-select";

const options = [
  { value: "none", label: "All Projects" },
  { value: "React JS", label: "React JS" },
  { value: "Next JS", label: "Next JS" },
  { value: "Python", label: "Python" },
];

const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "#1a1a1a",
    borderColor: "#333",
    color: "#fff",
    padding: "2px 4px",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#1a1a1a",
    zIndex: 9999,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#333" : "#1a1a1a",
    color: "#fff",
    cursor: "pointer",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#fff",
  }),
};

const Card = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    let animationFrame;

    const update = (time) => {
      lenisRef.current?.lenis?.raf(time);
      animationFrame = requestAnimationFrame(update);
    };

    animationFrame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const filteredProjects =
    selectedOption.value === "none"
      ? projectInfo
      : projectInfo.filter((project) =>
          project.main.includes(selectedOption.value)
        );

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <BackgroundBeamsWithCollision>
        <div className="flex h-full justify-center flex-col items-center gap-10 p-10">
          {/* Header */}
          <div className="fixed top-0 z-50 w-full px-10 py-3 bg-gradient-to-tr from-black via-neutral-900 to-neutral-800 shadow-md shadow-neutral-700 flex flex-col lg:flex-row md:flex-row justify-between items-center gap-4">
            <h1 className="text-neutral-200 text-2xl lg:text-3xl font-bold text-center">
              Project Stack
            </h1>

            <div className="flex items-center gap-2 z-50 relative w-full md:w-auto">
              <label className="text-neutral-300 text-base lg:text-lg">
                Filter By Tech:
              </label>
              <Select
              inputProps= {{inputMode:"none"}}
                value={selectedOption}
                onChange={(option) => setSelectedOption(option)}
                options={options}
                isSearchable = {false}
                styles={customStyles}
                className="w-48"
              />
            </div>
          </div>

          {/* Project Cards */}
          <div className="lg:grid z-0 mt-32 lg:gap-y-10 h-full lg:gap-x-20 lg:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="flex ring-1 ring-neutral-500 hover:ring-neutral-400 shadow-md shadow-neutral-700 rounded-lg bg-white dark:bg-gradient-to-br from-black via-neutral-900 to-neutral-950 hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.04] mb-10 md:max-w-xl md:flex-row flex-col"
              >
                <img
                  className="h-96 max-sm:h-48 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={project.winView}
                  alt={project.name}
                />
                <div className="flex flex-col justify-start p-4 lg:p-6 gap-2 lg:gap-4">
                  <h5 className="text-2xl font-medium text-neutral-800 dark:text-neutral-50 text-center lg:text-left">
                    {project.name}
                  </h5>
                  <p className="text-base text-neutral-600 dark:text-neutral-200">
                    {project.desc}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-300">
                    {project.techUsed.join(" | ")}
                  </p>
                  <div className="flex flex-col md:flex-row lg:text-xl md:text-lg text-md gap-2 text-neutral-400 dark:text-neutral-200 justify-between">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ring-1 ring-neutral-500 shadow-md shadow-black rounded-md px-4 py-2 text-center transition-transform duration-200 ease-in-out hover:ring-neutral-900 hover:bg-neutral-300 hover:text-neutral-950 active:scale-[0.95]"
                    >
                      Source Code
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ring-1 ring-neutral-500 shadow-md shadow-black rounded-md px-4 py-2 text-center transition-transform duration-200 ease-in-out hover:ring-neutral-900 hover:bg-neutral-300 hover:text-neutral-950 active:scale-[0.95]"
                      >
                        Live Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
};

export default Card;
