 import React, { useState } from "react";
import img from "../assets/images/freepik_bg.jpg";

import "../styles.css";
import ProjectCard from "../components/projectscard";

interface Project {
  id: number;
  title: string;
  description: string;
  img: string;
}

function Projects(): JSX.Element {
  const [projectID, setprojectID] = useState<number>(1);

  const projects: Project[] = [
    {
      id: 1,
      title: "Timber Terror",
      description: "Unity 3D Horror Game",
      img: img,
    },
    {
      id: 2,
      title: "Project 2",
      description: "TEST",
      img: img,
    },
    {
      id: 3,
      title: "Project 3",
      description: "TEST",
      img: img,
    },
    {
      id: 4,
      title: "Project 4",
      description: "TEST",
      img: img,
    },
    {
      id: 5,
      title: "Project 5",
      description: "TEST",
      img: img,
    },
    {
      id: 6,
      title: "Project 6",
      description: "TEST",
      img: img,
    },
  ];

  return (
    <>
      <div id="content" className="projects border-y-4 border-black bg-[#171717] text-white pt-20">
        <h1 className="text-center text-5xl font-bold py-6
        xl:text-4xl
        lg:text-4xl
        md:text-3xl
        sm:text-3xl
        xs:text-3xl
        2xs:text-3xl
        ">Content</h1>
        <p className="text-center text-lg max-w-[1000px] mx-auto text-[#939191] px-1
        xl:px-14 xl:text-base
        lg:px-20 lg:text-base
        md:px-32 md:text-sm
        sm:px-32 sm:text-sm
        xs:px-10 xs:text-sm
        2xs:px-10 2xs:text-xs">
          Hey there! Check out some of the cool content I've built during my free time.
          I had a blast working on these and I hope you'll have fun checking them out too!
          And hey, if you haven't already, come hang out with me on my YouTube channel.
          There's always something new and exciting going on over there!
        </p>

        <div className="flex justify-center items-center gap-4 mt-12 mb-2 
        xs:gap-2 xs:mb-0
        2xs:gap-2 2xs:mb-0">
          <button
            onClick={() => setprojectID(1)}
            className={`font-bold text-[19px] border-2 px-4 bg-[#171717] rounded-[6px] p-[4px] 
            xs:text-[12px]
            2xs:text-[8px] 
            ${projectID === 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }`}
          >
            Projects
          </button>
          <button
            onClick={() => setprojectID(2)}
            className={`font-bold text-[19px] border-2 px-4 bg-[#171717] rounded-[6px] p-[4px] 
            xs:text-[12px]
            2xs:text-[8px] 
            ${projectID === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }  `}
          >
            Blogs
          </button>
          <button
            onClick={() => setprojectID(3)}
            className={`font-bold text-[19px] border-2 px-4 bg-[#171717] rounded-[6px] p-[4px]  
            xs:text-[12px] 
            2xs:text-[8px] 
            ${projectID === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
              }`}
          >
            Videos
          </button>
        </div>

        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 
        xl:grid-cols-2
        lg:grid-cols-2 
        md:grid-cols-1
        sm:grid-cols-1 
        xs:grid-cols-1
        2xs:grid-cols-1">
          {projectID === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        {projectID === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          >
            PLACE HOLDER
          </div>
        ) : null}
        {projectID === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5"
          >
            PLACE HOLDER
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;