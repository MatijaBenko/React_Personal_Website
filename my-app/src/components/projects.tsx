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
      title: "Temp 1",
      description: "TEST",
      img: img,
    },
    {
      id: 2,
      title: "Temp 1",
      description: "TEST",
      img: img,
    },
    {
      id: 3,
      title: "Temp 1",
      description: "TEST",
      img: img,
    },
    {
      id: 4,
      title: "Temp 1",
      description: "TEST",
      img: img,
    },
    {
      id: 5,
      title: "Temp 1",
      description: "TEST",
      img: img,
    },
    {
      id: 6,
      title: "Temp 1",
      description: "TEST",
      img: img,
    },
  ];

  return (
    <>
      <div id="content" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Content</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
          cupiditate! Molestiae placeat architecto nihil obcaecati illum minima
          incidunt dolores? Officia consectetur optio non totam cum eos soluta
          ipsa et quod.
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setprojectID(1)}
            className={`font-bold text-[19px] border-2 px-4 bg-[#171717] rounded-[6px] p-[4px] ${
              projectID === 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setprojectID(2)}
            className={`font-bold text-[19px] border-2 px-4 bg-[#171717] rounded-[6px] p-[4px] ${
              projectID === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
            Blogs
          </button>
          <button
            onClick={() => setprojectID(3)}
            className={`font-bold text-[19px] border-2 px-4 bg-[#171717] rounded-[6px] p-[4px]  ${
              projectID === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Videos
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
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